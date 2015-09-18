# hapi-register

Simplify (*email*) registration for your Hapi.js based web Application or API

## Why?

*Many* people still prefer to use their email address when registering
to use a service - as opposed to logging in with their Google account
for example - for a *number* of reasons.
This plugin/module helps simplify that process.

## What?

***Simple, Tested & Maintained*** email (+ password) registration you can add
to a Hapi.js app in *minutes*.


#### Mode 1 - Require *Just Email* Address

If people *only* have to type in their email address to register their *interest* in using your app/site its the lowest possible friction.


#### Mode 2 - Require an *Email and Password*



## How?

### Usage

You are invited to *inspect* the code in `/lib`

### Install from NPM


### Specify Your *Required* Fields





# tl;dr

## The Art & Science of Helping People Register

*Much* *usability* and *user experience* research has gone into making
the "*perfect*" registration form for websites/applications.
(*see* "***Background Reading***" *section below*)
While there is **no** ***one-size fits all*** **solution** to the task,
there are a few general principals we can learn from the success of others.

> :bulb: The ***first question*** we should ask is:
**what is the** ***minimum*** **information** we
***need*** from **people**? (*to minimize the "friction" of registering*)

![minimise-friction-to-addoption](https://cloud.githubusercontent.com/assets/194400/9978113/251295f6-5f19-11e5-8452-ffe9549e07bb.png)

*Most* ***inexperienced*** web/app builders follow the "*we* ***might need*** *it*" approach (*often requested by a client or "product owner"*)
and *require* ***way too much***
input from the person registering and then *wonder* why their "*conversion*"
rate is low. The *simpler* approach is to ask for the *bare minimum*
you *need* in order to help get people *started using* your project as
quickly and easily a *possible* (*you can always ask for more detail later, once the person has tried the app and seen the value in it*).

At [**dwyl**](https://github.com/dwyl) we have ***two modes*** for letting people register.

The first allows people to enter (*just*) their
email address to stay *informed* of what we are doing. This is commonly
referred to as "*registering* ***interest***" in a product/service.

Second we *encourage* people to give us a bit more detail about themselves;
specifically their `first name` so that we can *address* them *by name*
when we contact them.

## Background Reading

+ ***Don’t Make Me Think*** - A Common Sense Approach to Web Usability -
*essential* reading for anyone building web sites/applications. see: http://www.sensible.com/dmmt.html
+ ***Rocket Surgery Made Easy*** - The Do-It-Yourself Guide to Finding and Fixing Usability Problems - *also recommended* when you need to
explain a usability issue to a non-technical person.
+ ***Time to Wow*** - a *detailed* explanation on why we should
*minimise* the "*friction*" to trying your product/service. see:
http://www.forentrepreneurs.com/time-to-wow/
