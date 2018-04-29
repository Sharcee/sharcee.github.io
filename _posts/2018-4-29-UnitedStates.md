---
layout: post
title:  "Python - Elimination"
date:   2018-4-29
categories:
  - Programming
description:
image: https://www.nasa.gov/sites/default/files/images/712129main_8247975848_88635d38a1_o.jpg
image-sm: https://www.nasa.gov/sites/default/files/images/712129main_8247975848_88635d38a1_o.jpg
excerpt: "Name a state without the letter E in it"
---

```
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
```