# Cordin - WIP - Not All of the features mentioned below are fully implmented
Cordin is a framework for Discord bots. It aims to provide the basic framework for a bot and let developers create commands trivialy, and consumers to easily add those commands.

### Consumer
Cordin aims to be simple for end users to use. With Cordin, the hardest part of creating a Discord bot is installing Node. After Node is installed, it's as simple as running `cordin init` and entering your bots creditentials or auth token, then dropping some command sets from the internet into your `sets` folder.

### Developer
Cordin's modular 'command set' system works for the benefit of command developers as well. The way that Cordin is setup, all developers have to do to create a command set is make a single javascript file. This file will be ran as a child process of Node. When a command is recieved from a Discord server, Cordin send's a 'message' to all of the child processes/command sets, providing them with a wealth of information, then allowing them to do as they wish with that information.
