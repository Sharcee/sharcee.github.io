---
layout: post
title:  "Filtering from a list"
date:   2018-4-29
categories:
  - Programming
  - Python
description:
image: https://www.nasa.gov/sites/default/files/images/712129main_8247975848_88635d38a1_o.jpg
image-sm: https://www.nasa.gov/sites/default/files/images/712129main_8247975848_88635d38a1_o.jpg
excerpt: "Name a state without the letter E in it"
---



```python
# @Problem
# Can you name a state without the letter E in it?

# @Type
# IF/THEN

# @Object
# Word

# @Analysis
# if Letter not in State, Print

# @Approach
# Find list of states.
# Build contains(letter, word)
# Run contains on bank
```


```python
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

    ['Mississippi', 'Oklahoma', 'Wyoming', 'Alaska', 'Illinois', 'Arkansas', 'Indiana', 'Louisiana', 'Iowa', 'Wisconsin', 'Arizona', 'Michigan', 'Kansas', 'Utah', 'Virginia', 'California', 'North Dakota', 'Florida', 'Hawaii', 'Missouri', 'Ohio', 'Alabama', 'South Dakota', 'Colorado', 'Idaho', 'Washington', 'North Carolina', 'Montana', 'South  Carolina']
