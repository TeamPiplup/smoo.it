<template>
  <div class="servers-view">
    <b-table
      :items="servers"
      :fields="fields"
      sort-by="state"
      striped
    >
      <template #cell(state)="{ item: { name, server, settings } }">
        <smoo-server-state
          :name="name"
          :server="server"
          :settings="settings"
          @state="server.state = $event"
        />
      </template>

      <template #head(server)>
        Server
        <b-icon icon="info-circle-fill" id="servers-hostname" @click.stop.prevent/>
        <b-tooltip target="servers-hostname" triggers="hover">
          Entering the hostname instead of an IPv4 address or changing the port is currently only possible with a
          <a-ext href="https://github.com/CraftyBoss/SuperMarioOdysseyOnline/releases/tag/latest-dev">dev build</a-ext>
          of the mod.
        </b-tooltip>
      </template>

      <template #cell(server)="{ item: { name, server: { host, ip, port }, link, hidden } }">
        <div class="name"><b>{{ name }}</b></div>
        <div class="host" v-if="host && ! hidden">
          <a-ext v-if="link" :href="link">{{ host }}</a-ext>
          <span v-else>{{ host }}</span>
        </div>
        <div class="ip" v-if="ip && ! hidden">{{ ip }}</div>
        <div class="port" v-if="! hidden" :class="{ 'default': (port || defaultPort) === defaultPort }">{{ port || defaultPort }}</div>
        <span v-else>
          <b-icon icon="info-circle-fill" :id="'servers-private-' + host + '-' + port"/>
          <b-tooltip :target="'servers-private-' + host + '-' + port" triggers="hover">
            This is a private server. Access is normally given in <a-ext href="https://discord.gg/CkrXuxh27E">Piplup's Discord</a-ext>.
            (It's just a placeholder, therefore it will always fail the online check.)
          </b-tooltip>
        </span>
      </template>

      <template #head(location)>
        <span class="location-long">Location</span>
        <span class="location-short" title="Location">Loc.</span>
      </template>

      <template #cell(location)="{ item }">
        <div>
          <span class="flag-icon">
            <country-flag
              :title="item.location.name"
              :country="item.location.flag"
              size="normal"
              rounded
            />
          </span>
          <span class="name"> {{ item.location.name }}</span>
        </div>
      </template>

      <template #cell(version)="{ item: { version } }">
        <div v-show="typeof version === 'object' && version.details" class="details">
          <b-icon icon="exclamation-triangle-fill" v-b-tooltip.html.bottomleft="((typeof version === 'object' && version.details) || '')"/>
        </div>
        <div v-html="(typeof version === 'object' ? version.html : version)"/>
      </template>

    </b-table>
  </div>
</template>

<style lang="scss" src="./servers.scss"/>

<script lang="ts" src="./servers.ts"/>
