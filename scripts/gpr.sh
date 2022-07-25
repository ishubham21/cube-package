echo 'actor_name<<EOF'
echo ${{ github.actor }} | tr "A-Z" "a-z" >> $GITHUB_ENV
echo 'EOF' >> $GITHUB_ENV
echo 'package_name<<EOF' >> $GITHUB_ENV
grep -Po '"name": *\K"[^"]*"' package.json | grep -oP '"\K[^"\047]+(?=["\047])' >> $GITHUB_ENV
echo 'EOF' >> $GITHUB_ENV
sed -i 's,"name": "${{ env.package_name }}","name": "@${{ env.actor_name }}/${{ env.package_name }}",' package.json
cat package.json
npm publish --access public