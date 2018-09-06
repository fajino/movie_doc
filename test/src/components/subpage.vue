
<template>

  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-content>
       
        <blockquote>

     <section>
              <v-parallax src="https://raw.githubusercontent.com/vuetifyjs/parallax-starter/master/template/assets/hero.jpeg" height="500">
                  <v-layout
                    column
                    align-center
                    justify-center
                    class="white--text"
                  >
                   <img src="@/assets/logo.png" alt="Vuetify.js" class="mb-5">
                
                    <h1 class="white--text mb-2 display-1 text-xs-center">Hello</h1>
                    <div class="subheading mb-3 text-xs-center">Powered by Vuetify</div>
                
                  </v-layout>
              </v-parallax>
      </section>


                  <section>
                          <v-layout
                            column
                            wrap
                            class="my-5"
                            align-center
                          >
                            <v-flex xs12 sm4 class="my-3">
                              <div class="text-xs-center">
                                <h2 class="headline">The best way to start developing</h2>
                                <span class="subheading">
                                  Cras facilisis mi vitae nunc 
                                </span>
                              </div>
                            </v-flex>
                            <v-flex xs12>
                              <v-container grid-list-xl>
                                <v-layout row wrap align-center>
                                  <v-flex xs12 md4>
                                    <v-card class="elevation-0 transparent">
                                      <v-card-text class="text-xs-center">
                                        <v-icon x-large class="blue--text text--lighten-2">color_lens</v-icon>
                                      </v-card-text>
                                      <v-card-title primary-title class="layout justify-center">
                                        <div class="headline text-xs-center">Material Design</div>
                                      </v-card-title>
                                      <v-card-text>
                                        Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare. 
                                        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
                                        Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti. 
                                      </v-card-text>
                                    </v-card>
                                  </v-flex>
                                  <v-flex xs12 md4>
                                    <v-card class="elevation-0 transparent">
                                      <v-card-text class="text-xs-center">
                                        <v-icon x-large class="blue--text text--lighten-2">flash_on</v-icon>
                                      </v-card-text>
                                      <v-card-title primary-title class="layout justify-center">
                                        <div class="headline">Fast development</div>
                                      </v-card-title>
                                      <v-card-text>
                                        Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare. 
                                        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
                                        Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti. 
                                      </v-card-text>
                                    </v-card>
                                  </v-flex>
                                  <v-flex xs12 md4>
                                    <v-card class="elevation-0 transparent">
                                      <v-img src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"></v-img>
                                      <v-card-title primary-title class="layout justify-center">
                                        
                                        <div class="headline text-xs-center">seowh</div>
                                      </v-card-title>
                                      <v-card-text>
                                        Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare. 
                                        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
                                        Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti. 
                                      </v-card-text>
                                       <v-card-actions>
                                        <v-btn flat color="orange">Share</v-btn>
                                        <v-btn flat color="orange">Explore</v-btn>
                                      </v-card-actions>
                                    </v-card>
                                  </v-flex>
                                </v-layout>
                              </v-container>
                            </v-flex>
                          </v-layout>
                </section>



                      <section>
                        <v-parallax src="https://raw.githubusercontent.com/vuetifyjs/parallax-starter/master/template/assets/plane.jpg" height="500">
                            <v-layout
                              column
                              align-center
                              justify-center
                              class="white--text"
                            >
                            
       
                                                      
                   
                            </v-layout>
                        </v-parallax>
                </section>



                      <section>
                        <v-layout
                            column
                            wrap
                            class="my-5"
                            align-center>
                               <iframe width="1196" height="696" src="https://www.youtube.com/embed/TNWMZIf7eSg" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                                          <template>
                                  <div class="text-xs-center">
                                    <v-bottom-sheet inset>
                                      <v-btn
                                        slot="activator"
                                        color="red"
                                        dark
                                      >
                                        Show player
                                      </v-btn>

                                      <v-card tile>
                                        <v-progress-linear
                                          :value="50"
                                          class="my-0"
                                          height="3"
                                        ></v-progress-linear>

                                        <v-list>
                                          <v-list-tile>
                                            <v-list-tile-content>
                                              <v-list-tile-title>The Walker</v-list-tile-title>
                                              <v-list-tile-sub-title>Fitz & The Trantrums</v-list-tile-sub-title>
                                            </v-list-tile-content>

                                            <v-spacer></v-spacer>

                                            <v-list-tile-action>
                                              <v-btn icon>
                                                <v-icon>fast_rewind</v-icon>
                                              </v-btn>
                                            </v-list-tile-action>

                                            <v-list-tile-action :class="{ 'mx-5': $vuetify.breakpoint.mdAndUp }">
                                              <v-btn icon>
                                                <v-icon>pause</v-icon>
                                              </v-btn>
                                            </v-list-tile-action>

                                            <v-list-tile-action :class="{ 'mr-3': $vuetify.breakpoint.mdAndUp }">
                                              <v-btn icon>
                                                <v-icon>fast_forward</v-icon>
                                              </v-btn>
                                            </v-list-tile-action>
                                          </v-list-tile>
                                        </v-list>
                                      </v-card>
                                    </v-bottom-sheet>
                                  </div>
                                </template>
          </v-layout>
     </section>



      <section>
                <template>
                <v-carousel>
                  <v-carousel-item
                    v-for="(item,i) in items"
                    :key="i"
                    :src="item.src"
                  ></v-carousel-item>
                </v-carousel>
              </template>
      </section>

  <section>
          <footer>
           <template>
                <div class="text-xs-center">
                  <v-bottom-sheet v-model="sheet">
                    <v-btn
                      slot="activator"
                      color="purple"
                      dark
                    >
                      Click me
                    </v-btn>

                    <v-list>
                      <v-subheader>Open in</v-subheader>
                      <v-list-tile
                        v-for="tile in tiles"
                        :key="tile.title"
                        @click="sheet = false"
                      >
                        <v-list-tile-avatar>
                          <v-avatar size="32px" tile>
                            <img
                              :src="`https://cdn.vuetifyjs.com/images/bottom-sheets/${tile.img}`"
                              :alt="tile.title"
                            >
                          </v-avatar>
                        </v-list-tile-avatar>
                        <v-list-tile-title>{{ tile.title }}</v-list-tile-title>
                      </v-list-tile>
                    </v-list>
                  </v-bottom-sheet>
                </div>
        </template>
          </footer>
            </section>
        </blockquote>
    </v-content>
    </v-slide-y-transition>
  </v-container>

</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>



<script>
      export default {
        data ()  {
          return {
            items: [
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg'
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg'
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg'
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg'
          }
        ]
        , tiles: [
        { img: 'keep.png', title: 'Keep' },
        { img: 'inbox.png', title: 'Inbox' },
        { img: 'hangouts.png', title: 'Hangouts' },
        { img: 'messenger.png', title: 'Messenger' },
        { img: 'google.png', title: 'Google+' }
   ]
   ,card_text: 'Lorem ipsum dolor sit amet, brute iriure accusata ne mea. Eos suavitate referrentur ad, te duo agam libris qualisque, utroque quaestio accommodare no qui. Et percipit laboramus usu, no invidunt verterem nominati mel. Dolorem ancillae an mei, ut putant invenire splendide mel, ea nec propriae adipisci. Ignota salutandi accusamus in sed, et per malis fuisset, qui id ludus appareat.'
          }
           
        }
      }
</script>


