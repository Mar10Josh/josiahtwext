// We use class syntax to define our extension object
// This isn't actually necessary, but it tends to look the best

class JosiahExtension {
    /**
     * Scratch will call this method *once* when the extension loads.
     * This method's job is to tell Scratch things like the extension's ID, name, and what blocks it supports.
     */
    getInfo() {
      return {
        // `id` is the internal ID of the extension
        // It should never change!
        // If you choose to make an actual extension, please change this to something else.
        // Only the characters a-z and 0-9 can be used. No spaces or special characters.
        id: 'josiahsextensionjs',
  
        // `name` is what the user sees in the toolbox
        // It can be changed without breaking projects.
        name: 'Josiah',
  
        blocks: [
          {
            // `opcode` is the internal ID of the block
            // It should never change!
            // It corresponds to the class method with the same name.
            opcode: 'hello',
            blockType: Scratch.BlockType.REPORTER,
            text: 'Hello, world!'
          },
          {
            opcode: 'dev',
           blockType: Scratch.BlockType.REPORTER,
           text: 'Developer and How to make this'
          },
          {
            opcode: 'closeto',
            blockType: Scratch.BlockType.BOOLEAN,
            text: '[NumF] is close to [NumS]',
            arguments: {
              NumF: {
               type: Scratch.ArgumentType.NUMBER,
               defaultValue: 1
              },
              NumS: {
               type: Scratch.ArgumentType.NUMBER,
               defaultValue: 2
              }
            }
          }
        ]
      };
    }
  
    /**
     * Corresponds to `opcode: 'hello'` above
     */
    hello() {
      // You can just return a value: any string, boolean, or number will work.
      // If you have to perform an asynchronous action like a request, just return a Promise.
      // The block will wait until the Promise resolves and return the resolved value.
      return 'Hello, world!';
    }
    dev() {
      return 'Josiah, Mar10Josh. Visit the turbowarp docs to make one.'
    }
    closeto(args) {
        return args.NumF == args.NumS - 1 || args.NumF == args.NumS - 2 || args.NumF == args.NumS + 1 || args.NumF == args.NumS + 2
    }
  }
  
  // Call Scratch.extensions.register to register your extension
  // Make sure to register each extension exactly once
  Scratch.extensions.register(new JosiahExtension());
