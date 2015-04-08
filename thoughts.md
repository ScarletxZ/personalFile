# Just a little thought 
This is my thoughts about JS. Check it out! : 

 == and ===
This is a debate topic. Many newbie didn't notice the differences, and I'll point this out here. 

== will returns true if it has the same value.
=== will returns false if it has the same type.

So, what should you use? === was the best to use. Why? Because true SHOULD STAY true and false SHOULD STAY false. Here's an example about how to :


```javascript
if(3 == '3') {
 return true;
}else{
 return false; 
/* in this case, this SHOULD return true as well */

if(3 != null) {
 return false;
}else{
 return true;
}
/* this will returns false. why because it was clear there. null was not the same as number. except 0. */
```

3 was not the same for '3'. Strings was not the same as numbers. And as I point in my previous paragraph, true should stay true and false should stay false. That's why I always point to use === if possible. It's more clear and more accurate. 

What I look for this was a little bug. But mostly I also use == in my projects, because you might want to check the VALUE, not the TYPE. Unless if you want to check the type. then you can find it with ===. oh I forgotten === also check for a same value and both a same type.

it's a real time consuming to understand this concept for me. but it's also fun to understand more concepts and just blah.. dunno. 
