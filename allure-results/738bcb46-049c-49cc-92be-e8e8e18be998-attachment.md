# Page snapshot

```yaml
- dialog "Welcome to MANAN":
  - heading "Welcome to MANAN" [level=2]
  - paragraph: Sign in to access your medical triage dashboard.
  - button "Connecting..." [disabled]:
    - img
    - text: Connecting...
  - text: Or continue with
  - tablist:
    - tab "Sign In"
    - tab "Sign Up" [selected]
  - tabpanel "Sign Up":
    - text: Username
    - textbox "Username" [disabled]: playwright1
    - text: Email Address
    - textbox "Email Address" [disabled]: playwright@gmail.com
    - text: Password
    - textbox "Password" [disabled]: numpyninja
    - button [disabled]:
      - img
    - text: Confirm Password
    - textbox "Confirm Password" [disabled]: numpyninja
    - button "Creating account..." [disabled]
  - paragraph: By continuing, you agree to our Terms of Service and Privacy Policy.
  - button "Close":
    - img
    - text: Close
```