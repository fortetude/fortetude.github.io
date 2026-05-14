---
title: Design Philosophy
parent: Home / Introduction
nav_order: 1
layout: minimal
---

# The Design Philosophy

## its not a tutorial app!

I decided to make the app a sort of self-assessment tool or training augment, rather than a tutorial app. After all, there's plenty of in-person coaching lessons available in most cities and free online YouTube tutorial videos (which is how I got started).

Instead, I wanted to do something different which hadn't really been done before, and can't currently be achieved via the two methods I just mentioned.

## qualities

The app was built with the following in mind: 

- **Traceur-friendly**: I designed this with the thought of whether I myself would enjoy using it
   - My hope is that as I continue to use it, I will notice pain points/improvements and implement solutions/features accordingly!

- **Keep It Simple**: Simple and intuitive to use, no unnecessarily complex functionality
   - Furthermore, the app's focus is on core fundamental moves and will not include niche/hyper advanced moves ie. triple-kongs, primarily because a strong foundation in the fundamentals means that you are on track to doing well on those too!

- **Quality over Quantity**: I didn’t want to make the app’s focus about how many moves I could do or how "good" it was on a basic scale of 1-10

- **Safe and Secure**: Fully offline and client-only so your data doesn’t go anywhere and is fully yours

- **Open Source**: If you want to fork and modify/extend the app, feel free to do so!

## rating system

I designed a three-dimensional system for users to self-assess how they performed a movement rather than relying on a simple two-dimensional 0-10 scale by itself. 

#### 1. <u>competency</u>
  
The app leverages the Hierarchy of Competence alongside colors to quickly show information:  

|                  ![pyramid.jpg](/assets/images/pyramid.jpg)                        |  
|------------------------------------------------------------------------------------|
|[<sub>(image source)</sub>](https://www.alexishaselberger.com/news-notes/competence)|  
  
    
Essentially:  
  
| competency                                                 | thinking | doing |
| ---------------------------------------------------------- | -------- | ----- |
| <span class="text-blue-000">Unconscious Competence</span>  |   zero   |  easy |
| <span class="text-green-200">Concious Competence</span>    |   lots   |  easy |
| <span class="text-yellow-300">Concious Incompetence</span> |   lots   |  hard |
| <span class="text-red-100">Unconscious Incompetence</span> |   zero   |  hard |


#### 2. <u>areas of concern</u>

I used the Tapp Brother's concept of the Training Triangle, which in order to execute a movement smoothly and safely, you need all 3 of:
- **Physical** strength and flexibility
- **Mental** clarity and confidence
- **Technical** understanding of the biomechanics involved

|                        ![triangle.png](/assets/images/triangle.png)                           |  
|-----------------------------------------------------------------------------------------------|
| [<sub>(image source) </sub>](https://www.youtube.com/watch?v=qVqK--TYU_s) <sub>(14:17)</sub>  |  

These markers can be used by users to signify where they are lacking for a certain movement, and to actively work on these areas whenever they can. This could be when:
- unlocking the movement itself
- trying a tougher variation of said move
- executing the move across larger heights and distances or different surfaces

#### 3. <u>control</u>

Control is how I would describe the stability of the movement on a scale from 0-10.

Furthermore, I would define _control_ as how well you would handle a movement:
- under normal circumstances 
- after adding distance/height and speed!
- after changing surfaces

### How I would rank things


{: .warning-title}
> I'm not your boss or coach
>
> This is just an example table of how I would use the ranking system, but ultimately parkour is extremely flexible in semantics, so I believe users should have the same flexibility in defining what the ranking means for them.  
> 
> As traceurs we generally understand our own bodies best as to why we are good and bad at certain things.   


| vault  | example | competency | area(s) of concern | control |
| ------ | ------- | ---------- | ----------------- | ------- |
| Step (L) | Really good at it, I can throw it whenever without thinking about it, however I can't quite do chained downward step vaults yet | <span class="text-blue-000">Unconscious Competence</span> | technique |   7 |
| Kong (L) | Not bad on ground level, but struggling to do kong precisions consistently |  <span class="text-green-200">Concious Competence</span>  | physical, technique | 7 |
| Dive Roll (L) | I need to mentally prepare myself first before going into it, and generally avoid doing it unless in specific situations where it looks safe enough to do so | <span class="text-yellow-300">Concious Incompetence</span> | mental | 5 |
| Double Kong | I haven't successfully done one yet, but am working on the progressions for it. So far I need to familiarise with the technique and build the necessary upper body strength such as handstand catch to safely exit out | <span class="text-red-100">Unconscious Incompetence</span> | physical, mental, technique | 1 |
