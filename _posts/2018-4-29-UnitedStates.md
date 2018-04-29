---
layout: post
title:  "Can you name a state without the letter .. in it?"
date:   2018-4-29
categories:
  - Programming
description:
image: http://www.worldstadiums.com/north_america/maps/united_states.gif
image-sm: http://www.worldstadiums.com/north_america/maps/united_states.gif
---

{% highlight python %}
states = { 'Alabama','Alaska','Arizona','Arkansas','California','Colorado',
         'Connecticut','Delaware','Florida','Georgia','Hawaii','Idaho', 
         'Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana',
         'Maine' 'Maryland','Massachusetts','Michigan','Minnesota',
         'Mississippi', 'Missouri','Montana','Nebraska','Nevada',
         'New Hampshire','New Jersey','New Mexico','New York',
         'North Carolina','North Dakota','Ohio',    
         'Oklahoma','Oregon','Pennsylvania','Rhode Island',
         'South  Carolina','South Dakota','Tennessee','Texas','Utah',
         'Vermont','Virginia','Washington','West Virginia',
         'Wisconsin','Wyoming'}


def contains(l, w):
    if l in w:
        return True

bank = []
for word in states:
    if not contains('e', word):
        bank.append(word)

print(bank)
{% endhighlight %}