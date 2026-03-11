import { useState, useEffect } from 'react';
import { supabase } from '../../lib/supabaseClient';

/**
 * useAuth — manages Supabase session + user role.
 * After sign-in, upserts a profiles row using the pending account type
 * stored in localStorage by AuthPage (cleared afterwards).
 *
 * @returns {{ session, loading, userRole: 'seeker'|'recruiter'|null }}
 */
export function useAuth() {
    const [session, setSession] = useState(null);
    const [loading, setLoading] = useState(true);
    const [userRole, setUserRole] = useState(null); // 'seeker' | 'recruiter' | null

    // ── Fetch / upsert the profile row for a given user ───────────────────
    const syncProfile = async (user) => {
        if (!user) { setUserRole(null); return; }

        // Check if a pending account type was selected in AuthPage
        const pending = localStorage.getItem('tb_pending_account_type');

        if (pending) {
            // New sign-up or first login — upsert with the chosen type
            const { data } = await supabase
                .from('profiles')
                .upsert({ user_id: user.id, account_type: pending }, { onConflict: 'user_id', ignoreDuplicates: true })
                .select('account_type')
                .maybeSingle();
            localStorage.removeItem('tb_pending_account_type');
            setUserRole(data?.account_type ?? pending);
        } else {
            // Returning user — just read their existing profile
            const { data } = await supabase
                .from('profiles')
                .select('account_type')
                .eq('user_id', user.id)
                .maybeSingle();
            setUserRole(data?.account_type ?? null);
        }
    };

    useEffect(() => {
        supabase.auth.getSession().then(({ data: { session } }) => {
            setSession(session);
            syncProfile(session?.user ?? null).finally(() => setLoading(false));
        });

        const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session);
            syncProfile(session?.user ?? null);
        });

        return () => subscription.unsubscribe();
    }, []);

    return { session, loading, userRole };
}
