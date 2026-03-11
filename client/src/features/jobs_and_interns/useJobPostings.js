// Merges hardcoded job listings with live recruiter postings from Supabase.
// Returns { jobData, loading } where jobData has the same shape as dt.js exports.

import { useState, useEffect } from 'react';
import { supabase } from '../../lib/supabaseClient';
import { jobData as hardcoded } from './dt_/dt.js';

// Map a Supabase job_postings row → same shape as hardcoded job objects
function mapRow(row) {
    return {
        id:          row.id,
        title:       row.title,
        company:     row.company,
        about:       row.about ?? '',
        location:    row.location,
        type:        row.type,
        deadline:    row.deadline,
        applyEmail:  row.apply_email,
        requirements: Array.isArray(row.requirements) ? row.requirements : [],
        skills:      Array.isArray(row.skills) ? row.skills : [],
        fromRecruiter: true,   // flag so UI can badge them
    };
}

export function useJobPostings() {
    const [merged, setMerged] = useState(hardcoded);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        supabase
            .from('job_postings')
            .select('*')
            .order('created_at', { ascending: false })
            .then(({ data, error }) => {
                if (!error && data?.length) {
                    // Group recruiter postings by role_category
                    const byRole = {};
                    data.forEach((row) => {
                        const cat = row.role_category;
                        if (!byRole[cat]) byRole[cat] = [];
                        byRole[cat].push(mapRow(row));
                    });

                    // Prepend recruiter postings to hardcoded lists
                    const combined = { ...hardcoded };
                    Object.keys(byRole).forEach((cat) => {
                        combined[cat] = [
                            ...byRole[cat],
                            ...(hardcoded[cat] ?? []),
                        ];
                    });
                    setMerged(combined);
                }
                setLoading(false);
            });
    }, []);

    return { jobData: merged, loading };
}
