import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { supabase } from '../../lib/supabaseClient';

/**
 * AuthPage - Supabase Auth UI rendered as a full-screen overlay.
 * View layer for the authentication feature.
 *
 * @param {function} onClose - called when the user dismisses the overlay
 */
function AuthPage({ onClose }) {
    return (
        /* Full-screen backdrop */
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">

            {/* Card */}
            <div className="relative w-full max-w-md mx-4 p-8 bg-white rounded-2xl shadow-2xl">

                {/* Close button */}
                {onClose && (
                    <button
                        onClick={onClose}
                        aria-label="Close"
                        className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 transition-colors"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                )}

                <Auth
                    supabaseClient={supabase}
                    appearance={{
                        theme: ThemeSupa,
                        variables: {
                            default: {
                                colors: {
                                    brand: 'black',
                                    brandAccent: '#333333',
                                },
                            },
                        },
                    }}
                    providers={['google', 'github']}
                />
            </div>
        </div>
    );
}

export default AuthPage;
