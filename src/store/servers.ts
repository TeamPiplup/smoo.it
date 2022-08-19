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
    server   : { host: 'piplup.smoo.it', ip: '51.178.136.142' },
    location : { flag: 'fr', name: 'France' },
    version  : linkTree('server', 'piplup/server', 'TeamPiplup/SmoOnlineServer'),
    private  : false,
  },
  {
    name     : 'Piplup (Capture Sync)',
    server   : { host: 'piplup.smoo.it', ip: '51.178.136.142', port: 1028 },
    location : { flag: 'fr', name: 'France' },
    version  : linkTree('server', 'piplup/server', 'TeamPiplup/SmoOnlineServer'),
    private  : false,
  },
  {
    name     : 'Piplup (Debug)',
    server   : { host: 'piplup.smoo.it', ip: '51.178.136.142', port: 1806 },
    location : { flag: 'fr', name: 'France' },
    version  : linkTree('packet-fixes', 'Sanae6/packet-fixes', 'TeamPiplup/SmoOnlineServer'),
    private  : false,
  },
  {
    name     : 'Piplup (Voice Proximity)',
    server   : { host: 'piplup.smoo.it', ip: '51.178.136.142', port: 1337 },
    location : { flag: 'fr', name: 'France' },
    version  : linkTree('master', 'TheUbMunster/master', 'TheUbMunster/SmoOnlineServer'),
    private  : true,
  },
  {
    name     : 'Piplup (Private)',
    server   : { host: 'piplup.smoo.it', ip: '51.178.136.142', port: 1337 },
    location : { flag: 'fr', name: 'France' },
    version  : linkTree('server', 'piplup/server', 'TeamPiplup/SmoOnlineServer'),
    private  : true,
  },
].map((s: IServer) => {
  s.server.state = null
  return s
})
