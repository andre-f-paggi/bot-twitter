import container from './cross-cutting/container'

const main = container.resolve('main').main
main()
