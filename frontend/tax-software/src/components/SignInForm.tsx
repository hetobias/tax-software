import { Button, Fieldset, Form, Label, TextInput } from "@trussworks/react-uswds"
import React from "react"

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
        <div style={{display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh"}}>
            <Form onSubmit={handleSubmit} large >
                <Fieldset legend="Sign In" legendStyle="large">
                <span>
                    or <a href="javascript:void(0);">create an account</a>
                </span>
                <Label htmlFor="username">Username or email address</Label>
                <TextInput
                    id="username"
                    name="username"
                    type="text"
                    autoCapitalize="off"
                    autoCorrect="off"
                />
                <Label htmlFor="password-sign-in">Password</Label>
                <TextInput
                    id="password-sign-in"
                    name="password-sign-in"
                    type={showPassword ? 'text' : 'password'}
                />
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
        
                <Button type="submit">Sign in</Button>
                <p>
                    <a href="javascript:void(0);" title="Forgot username">
                    Forgot username?
                    </a>
                </p>
                <p>
                    <a href="javascript:void(0);" title="Forgot password">
                    Forgot password?
                    </a>
                </p>
                </Fieldset>
            </Form>
        </div>

    )
}