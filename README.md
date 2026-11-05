# Welcome Back: Login and Register Page

A clean, responsive login and register page built with plain HTML, CSS, and JavaScript. Switch between Login and Register using folder-style tabs, and land on an animated "coming soon" page after submitting.

This project was built for practice. There is no backend yet, so no real accounts are created.

## Features

- Folder-style Login and Register tabs with an underline on the active tab
- Show and hide password button on the login form
- Remember me checkbox and forgot password link
- "Create account" and "login" links that switch between the two forms
- Redirect to a coming soon page after login or register
- Coming soon page with shaky, glowing green text and blinking dots
- Responsive card that stays centred and capped at a comfortable width

## Pages

| File | Purpose |
| --- | --- |
| `login.html` | Login and Register forms with tab switching |
| `login.css` | Styling for the card, tabs, inputs, and buttons |
| `login.js` | Tab switching, password toggle, and redirect on submit |
| `upcoming.html` | Animated coming soon page (HTML and CSS in one file) |

## Getting Started

1. Download or clone this repository.
2. Open the folder in VS Code.
3. Right-click `login.html` and choose **Open with Live Server**, or simply open the file in your browser.

No installs or build steps are needed.

## How It Works

- Clicking the Register or Login tab hides one form and shows the other, and moves the active style and underline to the selected tab.
- Submitting either form sends the user to `upcoming.html`.
- On `upcoming.html`, JavaScript splits the text into letters and gives each one its own shake timing, which creates the jittery effect.

## Built With

- HTML5
- CSS3 (flexbox, keyframe animations)
- JavaScript (DOM events)

## Project Structure

```
.
|-- login.html
|-- login.css
|-- login.js
|-- upcoming.html
`-- README.md
```

## Notes

- Forms do not validate input yet, so empty fields will still continue to the next page.
- The forgot password link points to `forgotpassword.html`, which is not included yet.

## Future Improvements

- Form validation and password match check on register
- Forgot password page
- Real authentication with a backend and database
- The main application page to replace the coming soon screen

## Author

Created by Destin as a practice project.
