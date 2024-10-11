import { IServer } from '@/types'

const github = (repo = 'Sanae6/SmoOnlineServer') =>
  `https://github.com/${repo}/`
const externLink = (href: string, text: string) =>
  '<a href="' + href + '" class="extern" target="_blank">' + text + '</a>'
const linkRelease = (tag: string, label?: string, repo?: string) =>
  externLink(github(repo) + 'releases/tag/' + tag, label || tag)
const linkTree = (branch: string, label?: string, repo?: string) =>
  externLink(github(repo) + 'tree/' + branch, label || branch)

export const servers: IServer[] = [
  {
    name     : 'Piplup (Main)',
    server   : { host: 'piplup.smoo.it' },
    location : { flag: 'fi', name: 'Finland' },
    version  : linkTree('server', 'piplup/server', 'TeamPiplup/SmoOnlineServer'),
    hidden   : false,
    settings : {
      Server        : { MaxPlayers: 10 },
      Scenario      : { MergeEnabled: true },
      Shines        : { Enabled: true },
      PersistShines : { Enabled: true },
    },
  },
  {
    name     : 'Piplup (Capture Sync)',
    server   : { host: 'piplup.smoo.it', port: 1028 },
    location : { flag: 'fi', name: 'Finland' },
    version  : linkTree('server', 'piplup/server', 'TeamPiplup/SmoOnlineServer'),
    hidden   : false,
  },
  {
    name     : 'Piplup (UDP)',
    server   : { host: 'piplup.smoo.it', port: 0 },
    location : { flag: 'fi', name: 'Finland' },
    settings : {
      Scenario      : { MergeEnabled: true },
      Shines        : { Enabled: true },
      PersistShines : { Enabled: true },
    },
    version: {
      html    : linkRelease('1.0.5-rcl.1', 'udp/1.0.5', 'Istador/smo-multi-rs'),
      details : `<p>Connecting requires mod version ${linkRelease('v1.4.0', 'v1.4.0', 'CraftyBoss/SuperMarioOdysseyOnline')} or later.</p>`,
    },
    hidden: true,
  },
  {
    name     : 'Piplup (Main)',
    server   : { host: 'us.smoo.raychu.xyz' },
    location : { flag: 'us', name: 'United States' },
    version  : linkTree('server', 'piplup/server', 'TeamPiplup/SmoOnlineServer'),
    hidden   : false,
    settings : {
      Server        : { MaxPlayers: 10 },
      Scenario      : { MergeEnabled: true },
      Shines        : { Enabled: true },
      PersistShines : { Enabled: true },
    },
  },
  {
    name     : 'Piplup (Capture Sync)',
    server   : { host: 'us.smoo.raychu.xyz', port: 1028 },
    location : { flag: 'us', name: 'United States' },
    version  : linkTree('server', 'piplup/server', 'TeamPiplup/SmoOnlineServer'),
    hidden   : false,
    settings : {
      Server        : { MaxPlayers: 8 },
      Scenario      : { MergeEnabled: true },
      Shines        : { Enabled: true },
      PersistShines : { Enabled: true },
    },
  },
  {
    name     : 'Piplup (UDP)',
    server   : { host: 'us.smoo.raychu.xyz', port: 1029 },
    location : { flag: 'us', name: 'United States' },
    version  : {
      html    : linkRelease('1.0.5-rcl.1', 'udp/1.0.5', 'Istador/smo-multi-rs'),
      details : `<p>Connecting requires mod version ${linkRelease('v1.4.0', 'v1.4.0', 'CraftyBoss/SuperMarioOdysseyOnline')} or later.</p>`,
    },
    settings: {
      Scenario      : { MergeEnabled: true },
      Shines        : { Enabled: true },
      PersistShines : { Enabled: true },
    },
    hidden: false,
  },
].map((s: IServer) => {
  s.server.state = null
  return s
})
