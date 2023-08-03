import { Button, Fieldset, Form, Label, TextInput } from "@trussworks/react-uswds"
import React from "react"
import { Link } from "react-router-dom"

export default function SignInForm() {

    const [showPassword, setShowPassword] = React.useState(false)

    function handleSubmit() {
        // event.preventDefault();

        // const signIn = {
        //     usernameOrEmail: usernameOrEmail,
        //     password: password
        // };
    }

    return (
        <div style={{ display: "flex", justifyContent: "center", marginTop: "10em"}}>
            <div style={{ maxWidth: "35em", minHeight: "100vh"}}>
            <Form onSubmit={handleSubmit} large style={{minWidth: "100vw", minHeight: "100vh"}}>
                <Fieldset legend="Sign In" legendStyle="large" >
                <span>
                    or <Link to="/createaccount">Create Account</Link>
                </span>
                <Label htmlFor="username">Email address</Label>
                <TextInput
                    id="username"
                    name="username"
                    type="text"
                    autoCapitalize="off"
                    autoCorrect="off"
                    style={{maxWidth: "35em"}}
                />
                <Label htmlFor="password-sign-in">Password</Label>
                <TextInput
                    id="password-sign-in"
                    name="password-sign-in"
                    type={showPassword ? 'text' : 'password'}
                    style={{maxWidth: "35em"}}
                />
                <div style={{maxWidth: "35em"}}>
                <p className="usa-form__note">
                    <a
                    title="Show password"
                    href="javascript:void(0);"
                    className="usa-show-password"
                    aria-controls="password-sign-in"
                    onClick={(): void =>
                        setShowPassword((showPassword) => !showPassword)
                    }>
                    {showPassword ? 'Hide password' : 'Show password'}
                    </a>
                </p>
                </div>
        
                <Button type="submit">Sign In</Button>

                </Fieldset>
            </Form>
            </div>
        </div>

    )
}