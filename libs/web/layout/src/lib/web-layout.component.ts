import { Component } from '@angular/core'

@Component({
  templateUrl: './web-layout.component.html',
})
export class WebLayoutComponent {
  whatsHappening = [
    {
      header: 'Trending in Web Development',
      time: 'Yesterday',
      text: 'TailwindCSS Is Taking Over the World!',
      footer: 'Trending with @code',
    },
    {
      header: 'Trending in Web Development',
      time: 'Yesterday',
      text: 'Nrwl releases V11 of @NxDevTools',
      footer: 'Trending with @code',
    },
  ]
  whoToFollow = [
    {
      username: 'NxDevTools',
      name: 'Nrlw Nx',
      avatarUrl: '',
    },
    {
      username: 'BeeSoftLabs',
      name: 'BeeSoft Labs',
      avatarUrl: '',
    },
    {
      username: 'connectamind',
      name: 'Connect a Mind',
      avatarUrl: '',
    },
  ]
}
