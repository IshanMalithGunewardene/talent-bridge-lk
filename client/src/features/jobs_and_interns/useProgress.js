import { useState, useEffect, useRef } from 'react';
import { supabase } from '../../lib/supabaseClient';

/**
 * Persists roadmap progress for a specific user + role using Supabase.
 * Table: roadmap_progress  (user_id TEXT, role TEXT, completed_skills TEXT[], PRIMARY KEY (user_id, role))
 *
 * @param {string|null} userId  - Supabase user UUID (null = guest, local-only mode)
 * @param {string}      role    - Role name e.g. 'Frontend Developer'
 * @returns {{ completedSkills: Set, toggleSkill: fn, loading: boolean }}
 */
export function useProgress(userId, role) {
    const [completedSkills, setCompletedSkills] = useState(new Set());
    const [loading, setLoading] = useState(false);

    // ── Fetch saved progress when user or role changes ───────────────────────
    useEffect(() => {
        setCompletedSkills(new Set());
        if (!userId) return; // Guest — local only

        let cancelled = false;
        setLoading(true);

        supabase
            .from('roadmap_progress')
            .select('completed_skills')
            .eq('user_id', userId)
            .eq('role', role)
            .maybeSingle()
            .then(({ data, error }) => {
                if (cancelled) return;
                if (error) { console.error('useProgress fetch error:', error); return; }
                if (data?.completed_skills) {
                    setCompletedSkills(new Set(data.completed_skills));
                }
            })
            .finally(() => { if (!cancelled) setLoading(false); });

        return () => { cancelled = true; };
    }, [userId, role]);

    // ── Debounced save so rapid toggles don't spam Supabase ─────────────────
    const saveTimer = useRef(null);

    const persistSkills = (nextSet) => {
        if (!userId) return;
        clearTimeout(saveTimer.current);
        saveTimer.current = setTimeout(async () => {
            const { error } = await supabase
                .from('roadmap_progress')
                .upsert(
                    { user_id: userId, role, completed_skills: [...nextSet] },
                    { onConflict: 'user_id,role' }
                );
            if (error) console.error('useProgress save error:', error);
        }, 600);
    };

    // ── Toggle a skill complete / incomplete ─────────────────────────────────
    const toggleSkill = (skill) => {
        setCompletedSkills((prev) => {
            const next = new Set(prev);
            if (next.has(skill)) next.delete(skill);
            else next.add(skill);
            persistSkills(next);
            return next;
        });
    };

    return { completedSkills, toggleSkill, loading };
}
