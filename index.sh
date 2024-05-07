#! /bin/bash

# CLI to execute the various Puppeteer scripts

clear
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

read -p "Your Choice : " FRND
echo ""

case $FRND in
    1) FRIEND="Joey" ;;
    2) FRIEND="Chandler" ;;
    3) FRIEND="Ross" ;;
    4) FRIEND="Rachel" ;;
    5) FRIEND="Phoebe" ;;
    6) FRIEND="Monica" ;;
    7) echo "Exit Application"; echo ""; exit 1 ;;
    *) echo "Invalid Input"; echo ""; sleep 2; ./index.sh ;;
esac

echo "You have chosen $FRND which is $FRIEND"
echo ""
node "${FRIEND,,}.js"
