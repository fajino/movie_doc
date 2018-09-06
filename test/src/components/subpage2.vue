<template>


  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-layout column align-center>
        <img src="@/assets/logo.png" alt="Vuetify.js" class="mb-5">
        <blockquote>


          
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
          <footer>
            <small>
              <em>&mdash;John Johnson</em>
            </small>
          </footer>
        </blockquote>
      </v-layout>
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
