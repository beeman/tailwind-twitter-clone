import { Component } from '@angular/core'

@Component({
  templateUrl: './web-settings-feature.component.html',
})
export class WebSettingsFeatureComponent {
  menu = [
    { label: 'Your account', path: '' },
    { label: 'Security and account access', path: 'security' },
    { label: 'Privacy and Safety', path: 'privacy' },
    { label: 'Notifications', path: 'notifications' },
    { label: 'Accessibility, display, and languages', path: 'accessibility' },
    { label: 'Additional Resources', path: 'resources' },
  ]

  description =
    'See information about your account, download an archive of your data, or learn about your account deactivation options'
  options = [
    {
      path: 'n/e',
      label: 'Account information',
      description: 'See your account information like your phone number and email address.',
    },
    { path: 'n/e', label: 'Change your password', description: 'Change your password at any time.' },
    {
      path: 'n/e',
      label: 'Download an archive of your data',
      description: 'Get insights into the type of information stored for your account.',
    },
    {
      path: 'n/e',
      label: 'TweetDeck’s Team',
      description: 'Invite anyone to Tweet from this account using TweetDeck’s Teams.',
    },
    { path: 'n/e', label: 'Deactivate your account', description: 'Find out how you can deactivate your account.' },
  ]
}
