/*global $*/

/* This will be based on an object (monkey, chimp, etc) variable called upgradeIndex. Since the upgeades will be in order,
** you won't be able to buy the last upgrade first.
** This also means that we can store their upgrade progress in one variable. If it's 0, they have no upgrades.
** If it's say, 10, we apply the effects of upgrades 1-10.
*/