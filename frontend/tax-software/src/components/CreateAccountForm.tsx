import { Button, Fieldset, Form, Label, TextInput } from "@trussworks/react-uswds"
import React from "react"
import { Link } from "react-router-dom"

export default function CreateAccountForm() {

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
                <Fieldset legend="Create Account" legendStyle="large">
                <span>
                    or <Link to="signin">Sign In</Link>
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
        
                <Button type="submit">Create Account</Button>

                </Fieldset>
            </Form>
        </div>

    )
}