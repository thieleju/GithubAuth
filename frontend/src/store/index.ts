import { defineStore } from "pinia";
// import { useRouter } from "vue-router";

import { GitHubUser } from "./GitHubUser";

export type RootState = {
  jwt: string;
  githubToken: string;
  isAuthenticated: boolean,
  ghUser: GitHubUser | null;
  baseUrl: string;
};

export const useMainStore = defineStore("mainStore", {
  state: () => {
    return {
      jwt: "",
      githubToken: "",
      isAuthenticated: false,
      ghUser: null,
      baseUrl: ""
    } as RootState;
  },
  actions: {
    setJWT(jwt: string): void {
      localStorage.setItem("jwt.token", jwt);
      this.jwt = jwt;
    },
    setGitHubToken(githubToken: string): void {
      this.githubToken = githubToken;
      this.isAuthenticated = true;
    },
    setUser(ghUser: GitHubUser): void {
      this.ghUser = ghUser;
    },
    logout(): void {
      localStorage.removeItem("jwt.token");
      this.isAuthenticated = false
      this.jwt = "";
      this.githubToken = "";
      this.ghUser = null;
    },
    setBaseUrl(baseUrl: string): void {
      this.baseUrl = baseUrl;
    }
  },
  getters: {
    getJWT(): string {
      return this.jwt;
    },
    getGitHubToken(): string {
      return this.githubToken;
    },
    getUser(): GitHubUser | null {
      return this.ghUser;
    },
    isUserAuthenticated(): boolean {
      return this.isAuthenticated;
    },
    getBaseUrl(): string {
      return this.baseUrl;
    }
  }
});