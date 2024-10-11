import { IServer } from '@/types'

const github = (repo = 'Sanae6/SmoOnlineServer') =>
  `https://github.com/${repo}/`
const externLink = (href: string, text: string) =>
  '<a href="' + href + '" class="extern" target="_blank">' + text + '</a>'
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
      Scenario      : { MergeEnabled: false },
      Shines        : { Enabled: true },
      PersistShines : { Enabled: true },
    },
  },
  {
    name     : 'Piplup (UDP)',
    server   : { host: 'piplup.smoo.it', port: 0 },
    location : { flag: 'fi', name: 'United Kingdom' },
    version: {
      html    : linkRelease('1.0.5-rcl.1', 'udp/1.0.5', 'Istador/smo-multi-rs'),
      details : `<p>Connecting requires mod version ${linkRelease('v1.4.0', 'v1.4.0', 'CraftyBoss/SuperMarioOdysseyOnline')} or later.</p>`,
    },
    settings : {
      Scenario      : { MergeEnabled: true },
      Shines        : { Enabled: false },
      PersistShines : { Enabled: false },
    },
    hidden   : true,
  },
    {
    name     : 'Piplup (Main)',
    server   : { host: 'piplup.smoo.it', },
    location : { flag: 'us', name: 'United States' },
    version  : linkTree('server', 'piplup/server', 'TeamPiplup/SmoOnlineServer'),
    hidden   : false,
    settings : {
      Server        : { MaxPlayers: 10 },
      Scenario      : { MergeEnabled: true },
      Shines        : { Enabled: true, ClearOnNewSaves: false },
      PersistShines : { Enabled: true },
    },
  },
  {
    name     : 'Piplup (Capture Sync)',
    server   : { host: 'piplup.smoo.it', port: 1028 },
    location : { flag: 'us', name: 'United States' },
    version  : linkTree('server', 'piplup/server', 'TeamPiplup/SmoOnlineServer'),
    hidden   : false,
    settings : {
      Server        : { MaxPlayers: 8 },
      Scenario      : { MergeEnabled: true },
      Shines        : { Enabled: false },
      PersistShines : { Enabled: false },
    },
    version: {
      html    : linkTree('udp-json-api', 'rust/udp', 'Istador/smo-multi-rs'),
      details : `
        <p>Connecting requires a special SMOO ${linkTree('udp-client', 'mod version', 'speyejack/SuperMarioOdysseyOnline')} that speaks UDP.</p>
        <p>Alternatively you can run a proxy on your PC that splits the TCP stream for the normal mod (build it from the server source code).</p>
        <p class="text-secondary">Or you can connect to a proxy on port <code>1026</code>, but then there won't be any benefits from using UDP.</p>
      `,
    },
  },
  {
    name     : 'Krokilex',
    server   : { host: 'krokilex.smoo.it', ip: '37.16.29.245' },
    location : { flag: 'fr', name: 'France' },
    version  : linkRelease('0.3.0', 'rust/0.3.0', 'JulesGuesnon/smo-online-server'),
    settings : {
      Server: { MaxPlayers: 8 },
    },
  },
  {
    dead     : true,
    name     : 'Jeff',
    server   : { host: 'jeff.smoo.it', ip: '172.105.137.146' },
    location : { flag: 'us', name: 'US-East' },
    version  : {
      html    : linkTree('master', 'proximity/1.0.1', 'TheUbMunster/SmoOnlineServer'),
      details : `
        The Proximity Voice Chat (PVC) client requires additional settings:
        <ul>
          <li>PVC Port: <code>12000</code></li>
          <li>Discord Application ID: <code>1011047390133899324</code></li>
        </ul>
      `,
    },
    settings: {
      Server: { MaxPlayers: 6 },
    },
  },
  {
    name     : 'Ninunity Online',
    server   : { host: 'ninunity.smoo.it', ip: '209.25.141.180', port: 62102 },
    location : { flag: 'de', name: 'Germany' },
    version  : linkRelease('1.0.3'),
    settings : {
      Server        : { MaxPlayers: 16 },
      Scenario      : { MergeEnabled: false },
      Shines        : { Enabled: false },
      PersistShines : { Enabled: false },
    },
    hidden   : false,
  },
].map((s: IServer) => {
  s.server.state = null
  return s
})
