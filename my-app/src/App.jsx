import { useState, useEffect } from 'react'
import './App.css'
import { supabase } from '../supabaseClient'
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'

function App() {
    const [session, setSession] = useState(null)

    useEffect(() => {
        supabase.auth.getSession().then(({ data: { session } }) => {
            setSession(session)
        })

        const {
            data: { subscription },
        } = supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session)
        })

        return () => subscription.unsubscribe()
    }, [])

    console.log(session?.user);

    if (!session) {
        return (
            <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
                <Auth
                supabaseClient={supabase}
                appearance={{
                    theme: ThemeSupa,
                    variables: {
                    default: {
                        colors: {
                        brand: "black",
                        brandAccent: "#333333",
                        },
                    },
                    },
                }}
                providers={["google", "github"]}
                />
            </div>
            </div>
        );
    } else {
        return <div>Logged in!</div>;
    }


}

export default App
