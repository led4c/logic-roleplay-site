---
layout: page
title: Tim
description: Tim.
titleTemplate: :title | Tentang Kami
---

<script setup>

import {  VPTeamPage, VPTeamPageTitle, VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: 'https://cdn.discordapp.com/attachments/1116941032974725130/1117020568210907146/aesthetic.gif',
    name: 'led4c',
    title: 'Founder',
    links: [
      { icon: 'github', link: 'https://github.com/led4c' },
      { icon: 'discord', link: 'https://discord/' }
    ]
  },
  {
    avatar: 'https://cdn.discordapp.com/attachments/1116941032974725130/1116943134799167569/666.gif',
    name: 'john',
    title: 'Co-Founder',
    links: [
      { icon: 'github', link: 'https://github.com/led4c' },
      { icon: 'discord', link: 'https://discord/' }
    ]
  },
  {
    avatar: 'https://cdn.discordapp.com/attachments/1116941032974725130/1116977085878116372/crip-mac-crip.gif',
    name: 'crips',
    title: 'Developer',
    links: [
      { icon: 'github', link: 'https://github.com/led4c' },
      { icon: 'discord', link: 'https://discord/' }
    ]
  },
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      Logical Team
    </template>
    <template #lead>
      Logical Team adalah sekelompok individu yang berdedikasi untuk menciptakan pengalaman bermain game yang imersif. Kami berusaha keras untuk menyediakan lingkungan yang dinamis dan menarik bagi para pemain di server Logic Roleplay.
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers
    size="medium" :members="members"
  />
</VPTeamPage>