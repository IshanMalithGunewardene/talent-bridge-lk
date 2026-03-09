import { useState, useEffect } from 'react';
import { supabase } from '../../lib/supabaseClient';

/**
 * useAuth - Custom hook that manages Supabase session state.
 * Acts as the Controller layer for the authentication feature.
 *
 * @returns {{ session: object|null, loading: boolean }}
 */
export function useAuth() {
    const [session, setSession] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Get the current session on mount
        supabase.auth.getSession().then(({ data: { session } }) => {
            setSession(session);
            setLoading(false);
        });

        // Subscribe to auth state changes
        const {
            data: { subscription },
        } = supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session);
            setLoading(false);
        });

        return () => subscription.unsubscribe();
    }, []);

    return { session, loading };
}
