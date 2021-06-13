# Talos SAP Commerce - Spartacus

# Project Setup

## Requirements BE
Your SAP Commerce development environment should include the following:

1.  **Java (JDK) 11** installed and configured in the system path. You can verity with `java --version`.
2.  **Ant 1.10.X** installed and configured in the system path. See steps below.
3.  SAP Commerce Suite version 2011. You can download it from [here](https://drive.google.com/drive/folders/1cvnxW0078wx0J2cLCgtDDxOnYtqS0-iE?usp=sharing)

### Install Java (JDK)
1.  Go to this [link](https://www.oracle.com/java/technologies/javase-jdk11-downloads.html)
2.  Choose version **jdk-11.0.X_osx-x64_bin.dmg** and download it (Requires login in Oracle)
3.  Execute the DMG and follow the steps
4.  Open your **Terminal** app (Quit it first if already open)
5.  Verify your installation with `java --version`, it should display something similar:
    ```
    java 11.0.5 2019-10-15 LTS
    Java(TM) SE Runtime Environment 18.9 (build 11.0.5+10-LTS)
    Java HotSpot(TM) 64-Bit Server VM 18.9 (build 11.0.5+10-LTS, mixed mode)
    ```
6.  If you receive and error `zsh: command not found: java` follow these steps
    * Open the **Terminal** app and write `cd ~` to go to your home folder
    * Open you profile file with your preferred editor (here I will use `nano`)
        - For > MacOS Catalina, execute `nano .zshrc`
        - For Old MacOS version, execute `nano .bash_profile`
    * Add the following and save it:
        ```
        export JAVA_HOME=$(/usr/libexec/java_home)
        export PATH=$JAVA_HOME/bin:$PATH
        ```
    * Quit the Terminal (`command(⌘) + q`) and re-open it.
    * Check installation (Step 5) again.

### Install Ant
1.  Go to this [link](https://ant.apache.org/bindownload.cgi)
2.  Choose version **apache-ant-1.10.9-bin.zip** and download it
3.  Open the Finder app, unzip the file and paste extracted the folder on your HOME folder (Go -> Go to Folder -> `~/`)
4.  Open your **Terminal** app
5.  Open you profile file with your preferred editor (here I will use `nano`)
    - For > MacOS Catalina, execute `nano .zshrc`
    - For Old MacOS version, execute `nano .bash_profile`
6.  Add the following lines and save
    ```
    export ANT_HOME=~/apache-ant-1.10.9/
    export PATH=$ANT_HOME/bin:$PATH
    ```
7.  Quit the Terminal (`command(⌘) + q`) and re-open it.
8.  Verify your installation with `ant -v`
    ```
    Apache Ant(TM) version 1.10.9 compiled on September 27 2020
    Trying the default build file: build.xml
    Buildfile: build.xml does not exist!
    Build failed
    ```

## Requirements FE
Your Angular development environment should include the following:
1.  Angular CLI: Version 10.1 or later, < 11. See steps below.
2.  Node.js: The most recent 12.x version is recommended, < 13. See steps below.
3.  Yarn: Version 1.15 or later. See steps below.

### Install Node Version Management (NVM)
1.  Open a terminal and verify `curl -V`
    - If not installed, then [install cUrl for MacOS](http://macappstore.org/curl/)
2.  Execute the following command `curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.37.2/install.sh | bash`
3.  Execute the command `cd ~` to go to your home folder
4.  Open you profile file with your preferred editor (here I will use `nano`)
    - For > MacOS Catalina, execute `nano .zshrc`
    - For Old MacOS version, execute `nano .bash_profile`
5.  Add the following lines to the file and save it
    ```
    export NVM_DIR="$HOME/.nvm"
    [ -s "/usr/local/opt/nvm/nvm.sh" ] && . "/usr/local/opt/nvm/nvm.sh"  # This loads nvm
    [ -s "/usr/local/opt/nvm/etc/bash_completion.d/nvm" ] && . "/usr/local/opt/nvm/etc/bash_completion.d/nvm"  # This loads nvm bash_completion
    ```
6.  Quit the Terminal (`command(⌘) + q`) and re-open it.
7.  Verify your installation with `nvm --version`

### Install Node.js using NVM
1.  Open the **Terminal** app
2.  Execute the following commands
    - `nvm install 12.21.0` to install Node.js version 12.21.0
    - `nvm use v12.21.0` to use the version installed
    - `nvm alias default v12.21.0` to set that version as default
3.  Verify your installation with `node -v`

### Install Angular CLI with NPM
1.  Open the **Terminal** APP
2.  Execute the following command `npm install -g @angular/cli@10.2.3` to install Angular CLI 10.2.3 globally
3.  Verify your installation with `ng version`
    **Note:** If you have a version higher that *10.2.3*, follow these [steps](https://stackoverflow.com/a/50363557) to downgrade

### Install YARN Package manager with NPM
1.  Open the **Terminal** app
2.  Execute the following command `npm install --global yarn` to install YARN globally
3.  Verify your installation with `yarn --version`

### Configure Angular CLI with YARN (Spartacus preference)
1.  Open the **Terminal** app
2.  Execute the following command `ng config -g cli.packageManager yarn`
3.  Verify you configuration with `ng config -g cli.packageManager`


# Project Installation (BE)

Use the next steps to install the project. Please make sure you change all references of <your-user> to the one that applies to you.

1.  Create the following folder structure ```/Users/<youruser>/clients/talos/spartacus-training-project/hybris/bin```

2.  Go to the bin folder and clone the repository with the following command ```git clone https://github.com/talosdigital/spartacus-training.git custom```

    * If you configured your account with Google Login and you don't have a password then you can clone your repository using an UI Tool like **SourceTree**, or create a *AppPassword* in your bitbucket account like [this](https://stackoverflow.com/a/40946844) and use it for your terminal configuration.

3.  Import the repository into source tree and initialize gitflow. At the end you should be in the develop branch

4.  Now is the time to configure some aliases and the Hybris optional config directory (pointing to our local configuration):

    * Download the [.spartacus-training-profile](https://drive.google.com/file/d/1qCkuF1ukZY0JtxiGRnGhRIcEWq_ydYFg/view?usp=sharing) and change the paths accordingly.
    * Place you file at the root of the repository (make sure the name starts with a dot)
    * Add your file in your .zshrc (> MacOS Catalina) or .bash_profile (Older MacOS versions). Make sure .zshrc file looks similar to the [sample .zshrc](https://drive.google.com/file/d/1OBOCutdWVE4GsfE1gpKgiQaul0R8XYTy/view?usp=sharing). Please change the references to <your-user> to the values that apply to you.
    * Quit the Terminal (`command(⌘) + q`) and re-open it.
    * Run ```echo $HYBRIS_OPT_CONFIG_DIR``` to make sure it was configured properly.

5.  Install ImageMagick in your machine:

    * If you don't have Homebrew, please install it using the command ```/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"```
    * Install ImageMagick using the command ```brew install imagemagick```

6.  Create you local configuration properties by downloading the [sample 20-local.properties](https://drive.google.com/file/d/1W2IQrjc2M5RzDah-ZzDoNTfbTzDCVVnS/view?usp=sharing), changing the values that correspond to your local machine and placing the file in ```/Users/<youruser>/clients/talos/spartacus-training-project/hybris/bin/custom/core-customize/project/env/local```

7.  Install hybris code base into your folder structure by running the command
    ```tcproject && ant installWithExtension -Dhybris.zip.package.src=/path/to/your/CXCOMM201100P_0-70005693.ZIP -Dhybris.zip.extension.package.src=/path/to/your/CXCOMINTPK210200P_0-80005851.ZIP```

8.  Go to your folder ```/Users/<youruser>/clients/talos/spartacus-training-project/hybris/bin``` and run the following command to give execution permissions to all .sh files
    ```find . -iname "*.sh" -exec chmod a+rx {} \;```

9.  Run the following command to copy the configuration files to the corresponding locations and install all the addons for the project
    ```tcenvconfig && ant installAddons && ant clean all```

10.  Initialize the system by running ```tcsetant && ant initialize``` (The initialization process can take up to 30 minutes)

11.  Start you Sap Commerce instance ```tcsetant && ./hybrisserver.sh```


# Project Installation (Spartacus)

1.  navigate to ```/Users/<youruser>/clients/talos/spartacus-training-project/hybris/bin/custom/js-storefront/taloscommercestore```
2.  Install the project dependencies by running ```yarn install```
3.  Start your spartacus app by running ```yarn start --ssl```
4.  Open the following URL in your browser ```https://localhost:4200```

# Testing locally with Server Side Rendering (SSR)
1.  As the SSR configuration runs with the production flag, you will need to change locally the property value of occBaseUrl in your ```taloscommercestore/src/environments/environment.prod.ts``` to point to you local backend instance (**Do not commit this change, it is only to test locally**).
2.  Build the project by running ```yarn build:ssr```
3.  Start the project by running ```yarn serve:ssr:local```


# Prettier Configuration for VSCode (Code Format)
1.  Once you open the storefront on VSCode, you need to install the recommended extensions (they will be shown once you open the project)

# Prettier Configuration for WebStorm (Code Format)
1.  Open Webstorm preferences and go to ```Languages & Frameworks > Javascript > Prettier```.
2.  Select the Prettier package (the one in ```taloscommercestore/node_modules/prettier```).
3.  Configure the files to be formatted. Use the following values ```{**/*,*}.{js,ts,jsx,tsx,json,scss,html}```
4.  Mark the ***On code reformat*** option as well as the ***On save*** one.
5.  Click Apply and then save your configuration.

# Additional Configurations for WebStorm
1.  Open Webstorm preferences and go to ```Editor & Code Style > TypeScript``` and make sure the value of ```Use path mapping from tsconfig.json``` has the value ```Only in files outside specified paths```.

# SourceTree Configuration
1.  Configure gitflow by following th next steps:
    1.  Make sure you are in the master branch
    2.  Go to ```Repository (menu) > Git flow/ Hg flow > Initialize Repository```
    3.  Initialize gitflow with the default settings. In Case you get the error message ```Device not configured```, run the following command ```git config credential.helper sourcetree```
2.  In order for Husky to work with SourceTree, you must run the following command ```sudo launchctl config user path "/usr/local/bin:$PATH"``` and restart your computer. Make sure ```/usr/local/bin``` is in your ```$PATH```

# Add new SVG Icons
1.  Add SVG icon to the SVG folder ```src/assets/svg```
2.  Execute the script ```yarn generate:sprite```
3.  Verify that a file name ```icons-sprite.svg``` is generated in ```src/assets/icons```

## Local Env
| Web App     | Url                                                                                             |
| ------------|-------------------------------------------------------------------------------------------------|
| Storefront  | [https://localhost:4200](https://localhost:4200)                                                |
| Backoffice  | [https://localhost:9002/backoffice](https://localhost:9002/backoffice)                          |
| Hac         | [https://localhost:9002/hac](https://localhost:9002/hac)                                        |
| SmartEdit   | [https://localhost:9002/smartedit](https://localhost:9002/smartedit)                            |
| Swagger     | [https://localhost:9002/occ/v2/swagger-ui.html](https://dlocalhost:9002/occ/v2/swagger-ui.html) |
