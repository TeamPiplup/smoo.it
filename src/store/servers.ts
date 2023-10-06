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
    server   : { host: 'piplup.smoo.it', ip: '143.198.241.242' },
    location : { flag: 'gb', name: 'United Kingdom' },
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
    server   : { host: 'piplup.smoo.it', ip: '143.198.241.242', port: 1028 },
    location : { flag: 'gb', name: 'United Kingdom' },
    version  : linkTree('server', 'piplup/server', 'TeamPiplup/SmoOnlineServer'),
    hidden   : false,
  },
  {
    name     : 'Piplup (Debug)',
    server   : { host: 'piplup.smoo.it', ip: '143.198.241.242', port: 1806 },
    location : { flag: 'gb', name: 'United Kingdom' },
    version  : linkTree('packet-fixes', 'Sanae6/packet-fixes', 'TeamPiplup/SmoOnlineServer'),
    hidden   : false,
  },
  {
    name     : 'Piplup (Voice Proximity)',
    server   : { host: 'piplup.smoo.it', ip: '143.198.241.242', port: 404 },
    location : { flag: 'gb', name: 'United Kingdom' },
    version  : linkTree('master', 'TheUbMunster/master', 'TheUbMunster/SmoOnlineServer'),
    hidden   : true,
  },
  {
    name     : 'Piplup (Private)',
    server   : { host: 'piplup.smoo.it', ip: '143.198.241.242', port: 1337 },
    location : { flag: 'gb', name: 'United Kingdom' },
    version  : linkTree('server', 'piplup/server', 'TeamPiplup/SmoOnlineServer'),
    hidden   : true,
  },
].map((s: IServer) => {
  s.server.state = null
  return s
})
