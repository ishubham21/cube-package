str="hello world, hello earth"
oldstr="hello"
newstr="apple"
result=$(echo $str | sed "s/$oldstr/$newstr/")
echo "Original String :  $str"
echo "Replaced String :  $result"