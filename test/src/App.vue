<template>
  <v-app id="inspire" dark>
    <v-navigation-drawer
      clipped
      v-model="drawer"
      fixed
      app
    >
       <v-list>
      <v-list-tile>
        <v-list-tile-action>
          <v-icon>home</v-icon>
        </v-list-tile-action>
        <v-list-tile-title>Home</v-list-tile-title>
      </v-list-tile>

      <v-list-group
        prepend-icon="account_circle"
        value="true"
      >
        <v-list-tile slot="activator">
          <v-list-tile-title>Users</v-list-tile-title>
        </v-list-tile>

        <v-list-group
          no-action
          sub-group
          value="true"
        >
  
          <v-list-tile slot="activator">
            <v-list-tile-title>menu</v-list-tile-title>
          </v-list-tile>
          
    <v-list>
            <v-list-tile
           
                v-for="(item, i) in items"
                :key="i"
                :to="item.link"
              >

      
                <v-list-tile-title v-text="item.title"></v-list-tile-title>
                <v-list-tile-action>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-tile-action>
          </v-list-tile>
        
      </v-list>
        </v-list-group>

        <v-list-group
          sub-group
          no-action
        >
          <v-list-tile slot="activator">
            <v-list-tile-title>Actions</v-list-tile-title>
          </v-list-tile>

          <v-list-tile
            v-for="(crud, i) in cruds"
            :key="i"

          >
            <v-list-tile-title v-text="crud[0]"></v-list-tile-title>
            <v-list-tile-action>
              <v-icon v-text="crud[1]"></v-icon>
            </v-list-tile-action>
          </v-list-tile>
        </v-list-group>
      </v-list-group>
    </v-list>
      
    </v-navigation-drawer>

      <v-toolbar app fixed clipped-left>
        <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
            <v-toolbar-title>aa</v-toolbar-title>
      </v-toolbar>
             <v-spacer></v-spacer>          
                <v-content>
              <router-view/>
          </v-content>

        <v-footer :fixed="fixed" app>
      <span>&copy; 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      
      drawer: true,
     
      items: [{
        icon: 'dashboard',
        title: 'main',
        link:'/'
      },
      {
        icon: 'dashboard',
        title: 'subpage',
        link:'/subpage'
      },
        {
        icon: 'dashboard',
        title: 'subpage2',
        link:'/subpage2'
      }
      ],
     
      cruds: [
        ['Create', 'add'],
        ['Read', 'insert_drive_file'],
        ['Update', 'update'],
        ['Delete', 'delete']
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
      
    }
  },
  name: 'App'
}
</script>
