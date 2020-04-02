<template>
  <v-app>
    <!-- Header -->
    <v-app-bar app color="primary">
      <v-spacer></v-spacer>
      <h1
        class="vuello-font vuello-logo pt-2"
        :class="[!isDarkTheme ? 'font-primary' : 'font-primary--dark']"
      >
        Vuello
      </h1>
      <v-spacer></v-spacer>
    </v-app-bar>

    <!-- Content -->
    <v-content>
      <v-container
        pa-0
        fluid
        fill-height
        class="align-start bg-surface"
        :class="[!isDarkTheme ? 'bg-surface' : 'bg-surface--dark']"
      >
        <!-- Board  -->
        <router-view />

        <!-- Theme Box -->
        <div class="vuello-theme-box">
          <v-card width="200" class="text-center" color="primary">
            <v-card-subtitle class="pb-0 pt-2">
              <h3
                class="vuello-font mb-n4"
                :class="[!isDarkTheme ? 'font-primary' : 'font-primary--dark']"
              >
                Theme
              </h3>
            </v-card-subtitle>
            <v-card-text class="pb-0">
              <v-row align="center" no-gutters justify="center">
                <v-col cols="4">
                  <p class="mb-1 font-weight-medium pr-1">Light</p>
                </v-col>
                <v-col cols="3">
                  <v-switch
                    :input-value="isDarkTheme"
                    color="blue lighten-3"
                    @change="changeTheme"
                  ></v-switch>
                </v-col>
                <v-col cols="4">
                  <p class="mb-1 font-weight-medium">Dark</p>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </div>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data: () => ({}),
  methods: {
    changeTheme() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark
      this.$store.commit('TOGGLE_THEME')
    }
  }
}
</script>
<style lang="scss">
$vuello-secondary-partial: rgba(228, 240, 238, 0.66);
$vuello-surface: #eef0f4;
$vuello-icon: #e3e3e3;
$vuello-primary-text: #101866;
$vuello-secondary-text: #222222;
$vuello-faded-text: #a8a8a8;

$vuello-secondary-partial--dark: rgba(59, 59, 59, 0.66);
$vuello-surface--dark: #252525;
$vuello-icon--dark: #797979;
$vuello-primary-text--dark: #d0dcff;
$vuello-secondary-text--dark: #ffffff;
$vuello-faded-text--dark: #898989;

@mixin bg($name, $var) {
  .bg-#{$name} {
    background: $var;
  }
}
@mixin bg-dark($name, $var) {
  .bg-#{$name}--dark {
    background: $var;
  }
}
@mixin text($name, $var) {
  .font-#{$name} {
    color: $var;
  }
}
@mixin text-dark($name, $var) {
  .font-#{$name}--dark {
    color: $var;
  }
}
@include bg('secondary-partial', $vuello-secondary-partial);
@include bg('surface', $vuello-surface);
@include bg('icon', $vuello-icon);
@include text('primary', $vuello-primary-text);
@include text('secondary', $vuello-secondary-text);
@include text('faded', $vuello-faded-text);

@include bg-dark('secondary-partial', $vuello-secondary-partial--dark);
@include bg-dark('surface', $vuello-surface--dark);
@include bg-dark('icon', $vuello-icon--dark);
@include text-dark('primary', $vuello-primary-text--dark);
@include text-dark('secondary', $vuello-secondary-text--dark);
@include text-dark('faded', $vuello-faded-text--dark);

.vuello-font {
  font-family: Kalam !important;
}
.vuello-logo {
  font-size: 2.5rem;
}
.vuello-theme-box {
  position: fixed;
  bottom: 0;
  right: 0;
  margin: 0 1rem 1rem 0;
}
</style>
