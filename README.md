# TCSS 491 Animation Assignment (Solo)
## Instructions

- [X] Watch the videos on animation (wk1-wk2)

- [X] Download the base code

- [X] Create a live version of your animation
    - https://raidenh-uwt.github.io/TCSS491-Animation/

- [X] Find an original spritesheet and download it

- [X] Animate the spritesheet
    - use the asset manager to load the spritesheet into memory
    - create an entity with `update()` and `draw()` and add it to the game engine
    - modify the `Animator` class to work with the spritesheet

- [X] (Optional) Have fun with your spritesheet
    - make a buncha different animations and show off

- [ ] Submit your animation
    - commit to github and submit the live link (not repo link)
    - may share final result in the `#animations` channel

## Notes
- Spyro the Dragon sprites ripped from The Legend of Spyro: A New Beginning by [Heartlessdragoon](https://www.spriters-resource.com/profile/heartlessdragoon/). Thank you!

- My spritesheet had animation loops that didn't loop over the full set of sprites, but instead a range, so I had to modify the `Animator` class to handle loops over a range of frames.