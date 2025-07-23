import { posts, contacts, subscribers, type Post, type Contact, type Subscriber, type InsertPost, type InsertContact, type InsertSubscriber } from "@shared/schema";

export interface IStorage {
  // Posts
  getAllPosts(): Promise<Post[]>;
  getPostsByCategory(category: string): Promise<Post[]>;
  getPostBySlug(slug: string): Promise<Post | undefined>;
  getFeaturedPost(): Promise<Post | undefined>;
  createPost(post: InsertPost): Promise<Post>;
  
  // Contacts
  createContact(contact: InsertContact): Promise<Contact>;
  
  // Subscribers
  createSubscriber(subscriber: InsertSubscriber): Promise<Subscriber>;
  getSubscriberByEmail(email: string): Promise<Subscriber | undefined>;
}

export class MemStorage implements IStorage {
  private posts: Map<number, Post>;
  private contacts: Map<number, Contact>;
  private subscribers: Map<number, Subscriber>;
  private currentPostId: number;
  private currentContactId: number;
  private currentSubscriberId: number;

  constructor() {
    this.posts = new Map();
    this.contacts = new Map();
    this.subscribers = new Map();
    this.currentPostId = 1;
    this.currentContactId = 1;
    this.currentSubscriberId = 1;
    
    // Initialize with sample blog posts
    this.initializeSamplePosts();
  }

  private initializeSamplePosts() {
    const samplePosts: InsertPost[] = [
      {
        title: "The Art of Vulnerable Writing: Finding Courage in Truth",
        slug: "art-of-vulnerable-writing",
        excerpt: "In a world that often rewards perfection, choosing vulnerability in our writing can feel like standing naked in a snowstorm. Yet it's precisely this rawness that creates the most profound connections between writer and reader.",
        content: `In a world that often rewards perfection, choosing vulnerability in our writing can feel like standing naked in a snowstorm. Yet it's precisely this rawness that creates the most profound connections between writer and reader.

I've been writing for over a decade, and the pieces that resonate most deeply with readers aren't the ones where I had all the answers. They're the ones where I admitted I was lost, confused, or struggling. Where I peeled back the layers of who I thought I should be and revealed who I actually am.

## The Mask We Wear

We're taught from an early age to present our best selves to the world. Social media has amplified this tendency, creating highlight reels that make everyone else's life seem effortlessly perfect. When we sit down to write, this same instinct kicks in—we want to sound wise, put-together, like we have it all figured out.

But readers can sense when we're performing rather than sharing. They can feel the distance created by our careful curation. What they're really hungry for is truth—messy, imperfect, human truth.

## Finding Courage in the Dark

Vulnerable writing isn't about oversharing or trauma dumping. It's about finding the universal in the personal. It's about naming the things we all feel but rarely say out loud. The fear of not being enough. The ache of loneliness even when surrounded by people. The struggle to forgive ourselves for our mistakes.

When we write about these experiences with honesty and care, something magical happens. Readers recognize themselves in our stories. They feel less alone. And paradoxically, by being most specifically ourselves, we become most universally human.

## The Ripple Effect

When we write vulnerably, we give others permission to do the same. We create spaces for authentic connection in a world that often feels disconnected. We remind each other that we're all just figuring it out as we go along.

Yes, it's scary. Yes, it requires courage. But the alternative—staying safe behind our carefully constructed walls—is scarier still. Because in the end, the stories that change us are the ones where someone dared to tell the truth.`,
        category: "essays",
        readingTime: "8 min read",
        publishedAt: "March 15, 2024",
        featured: "true"
      },
      {
        title: "5 Ways to Overcome Writer's Block and Find Your Voice",
        slug: "overcome-writers-block",
        excerpt: "Writer's block isn't just about having nothing to say—it's often about fear of saying the wrong thing. Here's how to break through the resistance and reconnect with your authentic voice.",
        content: `Writer's block isn't just about having nothing to say—it's often about fear of saying the wrong thing. Here's how to break through the resistance and reconnect with your authentic voice.

As writers, we've all been there. The cursor blinks mockingly on a blank page while our minds feel equally empty. But what if I told you that writer's block isn't really about lacking ideas? Most of the time, it's about fear—fear of judgment, fear of imperfection, fear of saying something that doesn't matter.

## 1. Write Badly on Purpose

Give yourself permission to write terribly. Set a timer for 10 minutes and write the worst possible version of whatever you're working on. Use clichés, write run-on sentences, make no sense at all. Often, the act of writing badly frees us from the pressure of writing well, and something genuine emerges from the mess.

## 2. Change Your Environment

Sometimes our physical space holds us hostage to old patterns. Try writing in a coffee shop, a park, or even just a different room in your house. The change of scenery can shift your mental state and open up new possibilities.

## 3. Write to One Person

Instead of writing for "everyone" or some imaginary audience, pick one specific person and write directly to them. It could be a friend, a family member, or even a fictional character. This creates intimacy and reduces the overwhelming feeling of writing into the void.

## 4. Start with Questions

When you don't know what to say, start with what you want to know. What questions are you curious about? What do you wish someone would explain to you? Questions naturally lead to exploration, and exploration leads to discovery.

## 5. Embrace the Messy Middle

Remember that first drafts are supposed to be rough. Your job isn't to write perfectly—it's to get the raw material down so you can shape it later. Think of yourself as a sculptor who needs clay before they can create art.

The key to overcoming writer's block is often about changing your relationship with the writing process itself. When we stop trying to be perfect and start trying to be honest, the words begin to flow.`,
        category: "tips",
        readingTime: "5 min read",
        publishedAt: "March 10, 2024",
        featured: "false"
      },
      {
        title: "The Library Card",
        slug: "the-library-card",
        excerpt: "She found the library card tucked between pages 247 and 248 of a worn copy of 'The Alchemist.' What she discovered next changed everything about how she understood her mother's secret life.",
        content: `She found the library card tucked between pages 247 and 248 of a worn copy of "The Alchemist." What she discovered next changed everything about how she understood her mother's secret life.

The card was yellowed with age, the kind they used to hand-stamp before everything went digital. Marie Ellen Morrison, it read in her mother's careful script. But her mother's name was Sarah.

Claire turned the card over in her hands, studying the faded purple stamps that marked each checkout: January 15, 1987. March 3, 1987. June 18, 1987. The dates continued through the late eighties and into the nineties, a secret rhythm of borrowed books and hidden dreams.

She'd been cleaning out her mother's house for three weeks now, ever since the funeral. Every room held its own archaeology of a life lived quietly, deliberately. But this was different. This was a mystery.

The library was still there on Maple Street, though it had been renovated twice since the card was issued. Claire drove there that afternoon with the card burning a hole in her pocket and a dozen questions burning in her mind.

"Marie Ellen Morrison?" The elderly librarian adjusted her glasses, squinting at the computer screen. "Oh my, I haven't seen that name in decades. She was one of our most devoted patrons back in the day."

"But that's not... my mother's name was Sarah Morrison."

The librarian's expression softened with understanding. "Oh, dear. You didn't know about Marie Ellen."

It turned out that every Tuesday and Thursday for nearly fifteen years, her mother had been someone else. Marie Ellen Morrison checked out poetry books and novels about women who traveled to distant countries. She attended book clubs and writing workshops. She even had a small circle of literary friends who knew her only by this name.

"She was working on a novel," the librarian explained, pulling out a manila folder from beneath the counter. "She asked me to keep this for her, in case anything ever happened. Said her family might want to know about this part of her life someday."

Inside were pages and pages of handwritten manuscript. The story of a woman who dreamed of seeing the world but never quite found the courage to leave her small town. A woman who loved her family but felt suffocated by their expectations. A woman who created a secret identity just to feel free for a few hours each week.

Claire sat in her car outside the library for an hour, reading her mother's words through tears. All those Tuesday and Thursday errands. All those times her mother said she was going grocery shopping or to the doctor. She'd been feeding a part of herself that her family never knew existed.

The last entry in the folder was dated just six months before her mother's death:

"I know I'll never publish this novel, and I know my family would never understand why I needed to be Marie Ellen all these years. But I want them to know that I wasn't just their wife and mother. I was also a dreamer, a storyteller, a woman with her own secret adventures. Maybe that's enough."

Claire closed the folder and started the car. She had a story to finish.`,
        category: "stories",
        readingTime: "12 min read",
        publishedAt: "March 5, 2024",
        featured: "false"
      },
      {
        title: "Learning to Listen to the Stories We Tell Ourselves",
        slug: "listening-to-our-stories",
        excerpt: "The narratives we create about our lives shape our reality more than we realize. Here's what I learned when I started paying attention to the stories running through my head.",
        content: `The narratives we create about our lives shape our reality more than we realize. Here's what I learned when I started paying attention to the stories running through my head.

I used to think I was just observing my life as it happened. It never occurred to me that I was actively narrating it, creating meaning through the stories I told myself about what everything meant.

Then I started noticing the patterns.

When something good happened, I'd immediately start crafting explanations for why it was probably temporary. When something challenging occurred, I'd weave it into an existing narrative about how things always go wrong for me. I wasn't just experiencing events—I was interpreting them through the lens of stories I'd been telling myself for years.

## The Stories We Inherit

Many of our internal narratives aren't even our own. They're inherited from families, cultures, and societies that shaped us before we were old enough to question their validity. "Success requires suffering." "Good things don't last." "I'm not the kind of person who..."

These inherited stories become the invisible framework through which we interpret everything that happens to us. They're so fundamental to how we see the world that we rarely examine them directly.

## Becoming the Observer

The first step in changing our stories is becoming aware of them. For one week, I challenged myself to notice the running commentary in my head. What stories was I telling myself about my relationships, my work, my future?

What I discovered was startling. Most of my internal narratives were variations on a few core themes: I'm behind where I should be in life. I'm not qualified for the opportunities that come my way. If I get too happy, something bad is bound to happen.

None of these stories were objectively true, but they felt true because I'd been telling them to myself for so long.

## Rewriting the Script

Once you become aware of your stories, you can start to question them. Where did this narrative come from? Is it serving me? What would happen if I told myself a different story about this situation?

I started experimenting with alternative narratives. Instead of "I'm behind in life," I tried "I'm exactly where I need to be." Instead of "I'm not qualified," I tried "I'm learning and growing." Instead of "Good things don't last," I tried "Good things happen to me regularly."

The shift wasn't instant, but it was profound. When I changed the stories I told myself, my experience of life began to change too.

## The Power of Possibility

Our internal narratives don't just reflect our reality—they create it. When we tell ourselves limiting stories, we unconsciously make choices that confirm those limitations. When we tell ourselves empowering stories, we open ourselves to possibilities we might have missed.

This doesn't mean adopting false optimism or ignoring real challenges. It means recognizing that the story we tell about any situation is a choice, and that choice has consequences.

The stories we tell ourselves matter because they become the foundation for the lives we build. By learning to listen to our internal narratives and consciously choosing which ones to nurture, we become active authors of our own experience rather than passive victims of circumstance.

What stories are you telling yourself? And more importantly, are they the stories you want to be living?`,
        category: "essays",
        readingTime: "7 min read",
        publishedAt: "February 28, 2024",
        featured: "false"
      },
      {
        title: "Building Your Daily Writing Habit",
        slug: "daily-writing-habit",
        excerpt: "The secret to becoming a better writer isn't talent—it's consistency. Here's how to build a sustainable daily writing practice that actually sticks.",
        content: `The secret to becoming a better writer isn't talent—it's consistency. Here's how to build a sustainable daily writing practice that actually sticks.

After years of sporadic writing bursts followed by long dry spells, I finally cracked the code on building a sustainable daily writing habit. The key wasn't writing more—it was making writing easier.

## Start Ridiculously Small

Most people fail at building writing habits because they set the bar too high. They commit to writing 1,000 words every day, then feel defeated when life gets in the way.

Instead, commit to writing just one sentence per day. That's it. One sentence is so easy that it's almost impossible to fail, but once you sit down to write that sentence, you'll often find yourself writing more.

## Make It Stupid Easy

Remove every possible barrier between you and writing. Keep a notebook by your bed. Have a dedicated writing app on your phone. Set up your computer so your writing document opens automatically when you turn it on.

The goal is to make writing the path of least resistance. When writing is easier than not writing, consistency becomes natural.

## Same Time, Same Place

Habits thrive on consistency. Pick a specific time and place for your daily writing, and stick to it. Your brain will start to anticipate the writing session, making it easier to slip into a creative mindset.

I write for 15 minutes every morning before checking my phone or email. This timing works because my mind is clear and I haven't been pulled into the reactive mode that digital communication creates.

## Focus on Process, Not Product

Don't worry about writing something good every day. The goal is simply to show up and put words on the page. Some days you'll write garbage, and that's perfectly fine. The muscle you're building is the habit of writing, not the ability to write perfectly.

## Track Your Streak

Keep a simple calendar and mark an X for every day you write. This visual representation of your consistency becomes surprisingly motivating. You'll find yourself writing just to keep the streak alive.

But be flexible with your definition of "writing." Journaling counts. Editing counts. Even writing a thoughtful email can count. The key is to engage with words every day.

## Embrace Imperfection

Your daily writing doesn't need to be publishable. It doesn't need to make sense. It doesn't even need to be complete thoughts. The goal is to maintain your connection to the creative process.

Some of my best published pieces started as messy, stream-of-consciousness entries in my daily writing practice. You never know which throwaway paragraph will spark your next big idea.

## Be Patient with the Process

Building a sustainable writing habit takes time. Don't expect overnight transformation. Be patient with yourself as you develop this new routine.

Remember: the goal isn't to become a perfect writer immediately. The goal is to become someone who writes every day. Once you've established that identity, everything else becomes easier.

The difference between writers who publish and those who dream about publishing often isn't talent—it's the simple act of showing up to the page every single day. Make it easy, make it consistent, and make it non-negotiable. Your future self will thank you.`,
        category: "tips",
        readingTime: "6 min read",
        publishedAt: "February 20, 2024",
        featured: "false"
      },
      {
        title: "The Coffee Shop Regular",
        slug: "coffee-shop-regular",
        excerpt: "Every Tuesday at 3 PM, she ordered the same drink and sat in the same corner table. Until the day she didn't. A story about routine, change, and the courage to break our own patterns.",
        content: `Every Tuesday at 3 PM, she ordered the same drink and sat in the same corner table. Until the day she didn't.

For two years, Margaret had been as predictable as the tide. Large coffee, splash of cream, no sugar. Corner table by the window where she could watch the street but feel protected by the glass. She'd bring her worn leather journal and a book—always fiction, always a story about someone braver than she felt.

The baristas knew her order by heart. The other regulars nodded politely when she arrived. She'd become part of the coffee shop's ecosystem, a quiet constant in an ever-changing space.

But on this particular Tuesday, everything felt different.

It started with the stranger in her seat. A young man with paint-stained fingers and wild hair, hunched over a laptop, completely absorbed in whatever world he was creating on screen. Margaret stood frozen in the doorway, holding her large coffee with splash of cream, no sugar, watching this intruder occupy her carefully curated space.

For a moment, panic rose in her chest. This was her table, her time, her ritual. Without it, she felt unmoored, like an actor who'd forgotten her lines.

Then something unexpected happened. Instead of waiting for him to leave or asking him to move, Margaret found herself walking to a different table. A table in the center of the room where she'd be visible to everyone, vulnerable to conversation, part of the community rather than observing it from the safety of the margins.

She sat down and opened her journal, but instead of writing her usual reflections on the book she'd read that week, she found herself writing about the young man at her table. About the intensity in his expression, the way his fingers moved across the keyboard like he was conducting an orchestra of words.

"Excuse me," came a voice. Margaret looked up to find an elderly woman standing beside her table. "I couldn't help but notice your beautiful handwriting. Are you working on something special?"

For two years, no one had approached Margaret at the coffee shop. Her corner table had been a fortress of solitude. But here, in the middle of everything, she was suddenly visible.

"Just... journaling," Margaret said, then surprised herself by adding, "What about you? Do you come here often?"

The woman's face lit up. "Every Tuesday! I've seen you here before, always by the window. You looked so peaceful, but I never wanted to disturb you. I'm Ellen."

"Margaret."

They talked for an hour. Ellen was a retired teacher who came to the coffee shop to grade papers for the tutoring center where she volunteered. She'd been watching Margaret for months, wondering about the stories she wrote in her leather journal.

"You know," Ellen said as she prepared to leave, "there's a writing group that meets here on Thursday evenings. We're always looking for new voices."

Margaret almost said no automatically. She'd never shared her writing with anyone. But something about this day—about being displaced from her usual spot, about being seen and approached—made her feel bolder.

"I might stop by," she heard herself saying.

Ellen smiled. "I hope you do. Sometimes the best stories come from stepping outside our usual chapters."

After Ellen left, Margaret looked over at the young man who'd unknowingly disrupted her routine. He was packing up his laptop, getting ready to leave. As he passed her table, he paused.

"Thanks for letting me borrow your spot," he said with a grin. "I've been trying to finish this story for weeks, and something about that corner just unlocked it for me."

"What's the story about?" Margaret asked.

"A woman who's been living the same day over and over until something forces her to change. Turns out, she needed to change more than she realized."

He left, and Margaret sat alone at her new table in the center of the room. She looked around at the coffee shop she thought she knew so well and saw it with fresh eyes. All these people she'd been watching from her corner—they had stories too. They had routines and dreams and fears just like hers.

She opened her journal to a fresh page and began to write:

"Today I learned that sometimes the best thing that can happen to you is losing the thing you thought you needed most. Today I learned that corners are for hiding, but life happens in the center of the room."

The next Tuesday, Margaret arrived at 3 PM and ordered her large coffee with splash of cream, no sugar. But instead of heading to the corner, she sat right in the middle of everything, journal open, ready for whatever conversations might find her.

Some routines are meant to be broken. Some patterns exist to be disrupted. And sometimes, the story really begins when you finally step out of the corner and into the light.`,
        category: "stories",
        readingTime: "9 min read",
        publishedAt: "February 15, 2024",
        featured: "false"
      }
    ];

    samplePosts.forEach(post => {
      const id = this.currentPostId++;
      const newPost: Post = { 
        ...post, 
        id,
        featured: post.featured ?? "false"
      };
      this.posts.set(id, newPost);
    });
  }

  async getAllPosts(): Promise<Post[]> {
    return Array.from(this.posts.values()).sort((a, b) => 
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    );
  }

  async getPostsByCategory(category: string): Promise<Post[]> {
    return Array.from(this.posts.values())
      .filter(post => post.category === category)
      .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
  }

  async getPostBySlug(slug: string): Promise<Post | undefined> {
    return Array.from(this.posts.values()).find(post => post.slug === slug);
  }

  async getFeaturedPost(): Promise<Post | undefined> {
    return Array.from(this.posts.values()).find(post => post.featured === "true");
  }

  async createPost(insertPost: InsertPost): Promise<Post> {
    const id = this.currentPostId++;
    const post: Post = { 
      ...insertPost, 
      id,
      featured: insertPost.featured ?? "false"
    };
    this.posts.set(id, post);
    return post;
  }

  async createContact(insertContact: InsertContact): Promise<Contact> {
    const id = this.currentContactId++;
    const contact: Contact = { 
      ...insertContact, 
      id, 
      subject: insertContact.subject ?? null,
      submittedAt: new Date().toISOString() 
    };
    this.contacts.set(id, contact);
    return contact;
  }

  async createSubscriber(insertSubscriber: InsertSubscriber): Promise<Subscriber> {
    const id = this.currentSubscriberId++;
    const subscriber: Subscriber = { 
      ...insertSubscriber, 
      id, 
      subscribedAt: new Date().toISOString() 
    };
    this.subscribers.set(id, subscriber);
    return subscriber;
  }

  async getSubscriberByEmail(email: string): Promise<Subscriber | undefined> {
    return Array.from(this.subscribers.values()).find(sub => sub.email === email);
  }
}

export const storage = new MemStorage();
