import React from "react";

import PageBase from "../components/PageBase";
import PageHeader from "../components/PageHeader";
import SubHeader from "../components/SubHeader";
import Text from "../components/Text";

const ChangelogComp = () => {
  return (
    <PageBase>
      <PageHeader>Server Changes</PageHeader>

      <SubHeader>9th February 2020</SubHeader>
      <div>
        <Text>
          <span class="colored">○</span> Installed Multiverse-core and created a
          separate creative world for open house.
        </Text>
        <Text>
          <span class="colored">○</span> created a new{" "}
          <span class="code">open_house_builders</span> player permissions group
          that grants special abilities while in the open house world:
        </Text>
        <Text>
          <span class="colored">○</span> In addition, all players can now use
          the <span class="code">/ptime</span> command to fix a
          player-perspective time.
        </Text>
        <Text>
          <span class="colored">○</span> Dynmap will now always show the Open
          House map by default.
        </Text>
        <Text>
          <span class="colored">○</span> In addition, all players can now use
          the /ptime command to fix a player-perspective time.
        </Text>
        <Text>
          <span class="colored">○</span> Dynmap will now always show the Open
          House map by default.
        </Text>
      </div>

      <SubHeader>23rd December 2019</SubHeader>
      <div>
        <Text>
          <span class="colored">○</span> Removed hordes as it was interfering
          with mob spawns.
        </Text>
        <Text>
          <span class="colored">○</span> Set mob spawn limits back to vanilla.
        </Text>
        <Text>
          <span class="colored">○</span> Installed Minecart Speed Plus.
          Basically a mod that lets you increase/decrease the max speed limit of
          minecarts by placing signs next to the rails.
        </Text>
        <Text>
          <span class="colored">○</span> Installed MinecartCollisions. Minecarts
          will not collide with other minecarts or other entities to prevent
          your rail systems from being jammed.
        </Text>
        <Text>
          <span class="colored">○</span> Installed GriefProtect. You can claim
          areas in the server as your home to prevent people from destroying it,
          and you can add friends as people you trust. More info on how to use
          this plugin can be found online. The area you can claim starts at 128
          but automatically grows as you spend more time playing on the server.
        </Text>
        <Text>
          <span class="colored">○</span> Installed luckPerms. If access to a
          command you need is denied, tell us.
        </Text>
        <Text>
          <span class="colored">○</span> installed EssentialsX. You have access
          to commands like <span class="code">/afk</span>,{" "}
          <span class="code">/sethome</span>, <span class="code">/home</span>,{" "}
          <span class="code">/back</span> (to teleport back where you died),{" "}
          <span class="code">/msg</span>, <span class="code">/mail</span>,{" "}
          <span class="code">/nick</span>, etc.
        </Text>
        <Text>
          <span class="colored">○</span> Installed WorldGuard and WorldEdit, but
          only intended for use by admins and builders.
        </Text>
        <Text>
          <span class="colored">○</span> Compasses should point to your home
          location instead of world spawn. [edited]
        </Text>
      </div>

      <SubHeader>12th December 2019</SubHeader>
      <div>
        <Text>
          <span class="colored">○</span> Local IP address changed from 10.12
          subnet to 10.16 subnet, SUTD gateway just... ran away, yet again.
        </Text>
      </div>

      <SubHeader>14th November 2019</SubHeader>
      <div>
        <Text>
          <span class="colored">○</span> Local IP address changed from 10.16
          subnet to 10.12 subnet, SUTD gateway just... ran away. Again.
        </Text>
      </div>

      <SubHeader>6th November 2019</SubHeader>
      <div>
        <Text>
          <span class="colored">○</span> Local IP address changed from 10.12
          subnet to 10.16 subnet, SUTD gateway just... ran away.
        </Text>
      </div>

      <SubHeader>21st September 2019</SubHeader>
      <div>
        <Text>
          <span class="colored">○</span> Apply x8 harvest bonus for coal and all
          varieties of wood.
        </Text>
      </div>

      <SubHeader>20th September 2019</SubHeader>
      <div>
        <Text>
          <span class="colored">○</span> Make dynmap render map tiles in
          parallel (<span class="code">parallelrendercnt</span>: 4).
        </Text>
        <Text>
          <span class="colored">○</span> Always show layers on dynmap web client
          (<span class="code">sidebaropened: true</span>).
        </Text>
      </div>

      <SubHeader>19th September 2019</SubHeader>
      <div>
        <Text>
          <span class="colored">○</span> Change mob spawn limit to 140.
        </Text>
        <Text>
          <span class="colored">○</span> Fix bug where guests on the dynmap
          website would always have the chat name of the last logged in player:
        </Text>
      </div>

      <SubHeader>18th September 2019</SubHeader>
      <div>
        <Text>
          <span class="colored">○</span> Change netty's thread count to 8 for
          better network performance.
        </Text>
        <Text>
          <span class="colored">○</span> Change mob spawn limit to 1140 (by
          accident).
        </Text>
      </div>

      <SubHeader>17th September 2019</SubHeader>
      <div>
        <Text>
          <span class="colored">○</span> Add sethome and graves functionality:
          you can now set world teleportation points where you can teleport to,
          such as your base. Graves are also enabled now for easier death
          recovery.
        </Text>
      </div>

      <SubHeader>16th September 2019</SubHeader>
      <div>
        <Text>
          <span class="colored">○</span> Increase ore harvest rate by x8 –
          mining a (naturally generated) ore block will now give you x8 the ore.
          This is so you spend less time mining and more time exploring and
          building with your friends!
        </Text>
      </div>
    </PageBase>
  );
};

export default ChangelogComp;
