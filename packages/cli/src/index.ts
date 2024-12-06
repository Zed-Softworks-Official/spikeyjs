#!/usr/bin/env node

import chalk from 'chalk'
import inquirer from 'inquirer'
import figlet from 'figlet'
import { Command } from 'commander'

const program = new Command()

program
    .name('spikey')
    .description('Create and manage your Spikey projects')
    .version('0.0.1')

program.command('ping').action(() => {
    console.log(chalk.green('pong'))
})

program.command('create').action(async () => {
    const spikey = figlet.textSync('Spikey')
    console.log(spikey)

    const answers = await inquirer.prompt([
        {
            type: 'input',
            name: 'plugin_name',
            message: 'What is the name of the plugin?',
            default: 'My Plugin',
        },
        {
            type: 'input',
            name: 'plugin_description',
            message: 'What is the description of the plugin?',
            default: 'Something cool goes here',
        },
        {
            type: 'input',
            name: 'plugin_author',
            message: 'What is the author of the plugin?',
            default: 'Your Name',
        },
        {
            type: 'input',
            name: 'plugin_version',
            message: 'What is the version of the plugin?',
            default: '1.0.0',
        },
    ])

    console.log(answers)
})

program.parse()
