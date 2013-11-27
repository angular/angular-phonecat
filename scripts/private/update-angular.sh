#! /bin/sh
if [ -n "$1" ]; then

	SCRIPT_DIR=`dirname $0`
	ROOT_DIR=$SCRIPT_DIR/../../

	git checkout -f master
	git checkout step-0^ -b update-$1
	$SCRIPT_DIR/download-angular.sh $1
	git add $ROOT_DIR/app/lib/angular
	git commit -m"BUMP ANGULAR VERSION to $1"

	for (( i = 0; i <= 12; i++ )); do
		git cherry-pick step-$i
	done

else
  echo "Usage: update-angular <version>"
fi