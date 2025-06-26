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
    - tab "Sign In" [selected]
    - tab "Sign Up"
  - tabpanel "Sign In":
    - text: Username
    - textbox "Username" [disabled]: playwright
    - text: Password
    - textbox "Password" [disabled]: numphyNinja@207
    - button [disabled]:
      - img
    - button "Signing in..." [disabled]
  - paragraph: By continuing, you agree to our Terms of Service and Privacy Policy.
  - button "Close":
    - img
    - text: Close
```