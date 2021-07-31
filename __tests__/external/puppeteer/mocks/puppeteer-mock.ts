import { Browser, Page, ElementHandle } from 'puppeteer'

export const stubPage = {
  async goto (url: string) {
    return Promise.resolve()
  },
  async $$ (selector: string): Promise<ElementHandle[]> {
    return Promise.resolve([])
  },
  async $ (selector: string) {
    return Promise.resolve()
  },
  async $eval (selector: string, pageFunction: any) {
    return Promise.resolve()
  },
  async evaluate (fn: Function) {
    return Promise.resolve(fn())
  }
} as unknown as Page

export const stubBrowser = {
  async newPage () {
    return Promise.resolve(stubPage)
  },
  async close () {
    return Promise.resolve()
  }
} as unknown as Browser

export const stubPuppeteer = {
  async launch () {
    return Promise.resolve(stubBrowser)
  }
} as unknown as any

export const stubElementHandle = {
  async $eval () {
    console.log('stub element handle')
    return Promise.resolve()
  }
} as unknown as ElementHandle
