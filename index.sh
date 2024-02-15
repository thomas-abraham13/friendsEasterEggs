#! /bin/bash

# CLI to execute the various Puppeteer scripts

clear;
echo "----------------------------------------------------------------------------------------"
echo "                                FRIENDS EASTER EGGS"
echo "----------------------------------------------------------------------------------------"
echo "Choose the Friend whose script you'd like to execute : "
echo "1. Joey"
echo "2. Chandler"
echo "3. Ross"
echo "4. Rachel"
echo "5. Phoebe"
echo "6. Monica"
echo "7. Exit CLI"
echo ""
echo -n "Your Choice : "
read FRND
echo ""

if [ $FRND -gt 0 ] && [ $FRND -le 7 ]; then
    echo -n "You have chosen $FRND which is "
    case $FRND in
        1)
        echo "Joey"
        echo ""
        node joey.js
        ;;

        2)
        echo "Chandler"
        echo ""
        node chandler.js
        ;;

        3)
        echo "Ross"
        echo ""
        node ross.js
        ;;

        4)
        echo "Rachel"
        echo ""
        node rachel.js
        ;;

        5)
        echo "Phoebe"
        echo ""
        node phoebe.js
        ;;

        6)
        echo "Monica"
        echo ""
        node monica.js
        ;;

        7)
        echo "Exit Application"
        echo ""
        exit 1
        ;;

        *)
        cho ""
        echo "Error Please Start Again"
        echo ""
        ;;
    esac
else
    echo ""
    echo "Invalid Input"
    echo ""
    sleep 2
    ./index.sh
fi
