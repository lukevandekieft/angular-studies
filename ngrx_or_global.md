# NgRx and Global Service Comparison

## Key Quotes

“You’ll know when you need Flux. If you aren’t sure if you need it, you don’t need it.” 
– Pete Hunt, Flux

“If you trade something off, make sure you get something in return.” 
– Dan Abramov, Redux

“Don’t use Redux until you have problems with vanilla React.” - Dan Abramov, Redux

“NGRX complicates things for simple applications and simplifies things for complex applications.”

</br>

---
</br>

## Basic Comparisons

|        | **Global Service** | **Redux** |
| ------------- |-------------| -----|
| Elevator Pitch | **Built in, low-overhead state**. Design your own global service that can have state manipulated, injected, and scoped to your specifications	Separation of Application State | All components share an **independent single source of truth** that they can alter, listen to, or ignore as needed |
| Setup Complexity | **Moderate**. Creating your own service is easy, doing it correctly takes work | **Moderate**. Initial boilerplate setup can be confusing and unintuitive |
| Learning Complexity | **Easy**. Just learn Angular & rxjs	 | **Moderate**. The gist of redux is fairly simple but takes a while to put into practice |
| Maintenance Complexity | **Fairly Easy**. Updating existing state is easy, the occasional challenge would come from unexpected side effects | **Fairly Easy**. Once it’s set up NgRx is self-managing |
| Ease of Daily Use | **Easy**. Just learn Angular & rxjs | **Fairly Easy**. Editing state requires modification of various boilerplate files |


</br>

---
</br>

## “Don’t Use Redux Unless You Need it!” When is That?

### Use When:
-	Underlying data changes frequently, requiring a strong source of truth for competing views
-	The app structure is too large to easily pass necessary state
-	Components would otherwise be too tightly coupled by passing state up and down the tree
-	State is long-lived and needs to be maintained for long user sessions
-	It’s important to know when state slices change and where they come from
-	Components concurrently show different views based on the same data (think Facebook’s message list, count, and notifications all in different sections)

</br>

### The Tradeoff
You get:
-	A global, centralized store 
-	Store persistence
-	“time travel” debugging
-	Predictable state updates
-	Better state logging
-	Component Decoupling
-	Performance increase (*debatable)

In exchange you must:
-	 Save state as plain data
-	Describe changes as plain objects
-	Handle state changes with pure functions that apply updates immutably 
-	Deal with “Boilerplate” code

</br>

---
</br>

## Dismissed Global State Options

### **GraphQL** 
This works great as a pseudo-store but requires a massive overhaul of data management, query practices, and even basic structural components. If we aren’t picking GraphQL for its other values then it’s inadvisable to use just for state.

### **Promises/Mutable Variables** 
Not a realistic option for anything other than the simplest apps. There are plenty of reasons why, but notable examples include its inability to accurately scale across multiple components, the likelihood of mutations getting lost, and the rigid/dated paradigm under which Promises operate.

</br>

---
</br>

## Questions to Ask When Deciding
-	Have we used NgRx and/or a global service before? What motivated that choice?
-	Will this application have complex state interactions?
-	Will the underlying data change regularly or have multiple inputs? (Unlikely for draft)
-	Will the app be large enough that component nesting and state passing would be concerns?
-	Would implementing our own global service simplify state and cut back on boilerplate, or would it create extra work wherein we need to reinvent the wheel?
-	If we decide on a global service then do we use Akita? (Would be a shorter spike)

</br>

---
</br>

## More Pros and Cons for NgRx
### **PRO:**
-	 Gives our app plenty of room to grow
-	Our data is very long-lived as the draft is ever-present, why not set a single source for it
-	We aren’t obligated to use NgRx for all state so we can ignore it when irrelevant 
-	Our “which step are you on?”, “which sections are complete/incomplete?”, and the actual dynamic pages can rely on the same, in-sync data for presenting their info
-	Effectively provides a client-side cache that minimizes server calls
-	Improved tooling and debugging a big plus
-	NgRx has an approved and proper way for implementing state management; a global source would have be custom since there isn’t a TRUE universal recommendation
### **CON:**
-	What problem is *specifically* being solved here? Do we *need* NgRx. It's hard to say right now which is a red flag.
-	It seems unlikely that we “have data that needs to be used in multiple places and passing it via props makes components break the single-responsibility principle”
-	It’s unlikely that more than one source would mutate our draft data at a time (e.g. a server)
-	How is store cleaned up?

</br>

---
</br> 

## Reading and References:

- **[NgRx Store: An Architecture Guide](https://blog.angular-university.io/angular-ngrx-store-and-effects-crash-course/)**, Angular University 
- **[NgRx Overview](https://ngrx.io/docs)**, NgRx Docs
- **[Should I Use Redux?](https://redux.js.org/faq/general/)**, Redux Docs
- **[You Might not Need Redux](https://medium.com/@dan_abramov/you-might-not-need-redux-be46360cf367)**, Dan Abramov
- **[Comparison of Local State and Global State](https://ngrx.io/guide/component-store/comparison)**, NgRx Docs
- **[Angular Service Layers: Redux, RxJs and Ngrx Store - When to Use a Store And Why?](https://blog.angular-university.io/angular-2-redux-ngrx-rxjs/)**, Angular University
- **[You Do (Not) Need External Storage Managers](https://medium.com/maestral-solutions/angular-application-state-management-you-do-not-need-external-data-stores-like-ngrx-redux-and-d6d43a6c6d69)**, Maestral Solutions
- **[State Management: Don’t Shoot Yourself in the Foot Before You Start an Angular Application](https://medium.com/@2muchcoffee/angular-state-management-a-must-have-for-large-scale-angular-apps-8b98e5a761c7)**, 2MuchCoffee

Stack Overflow:
- https://stackoverflow.com/questions/51274343/angular-6-why-use-ngrx-store-rather-than-service-injection
- https://stackoverflow.com/questions/50067218/where-to-store-global-data-in-angular

Misc References:
- **[Hierarchical Dependency Injection]()**
- **[communication between components is using a shared service]()**
- **[NgRx DevTools: Important Practical Tips](https://blog.angular-university.io/angular-ngrx-devtools/)**, Angular University

Demo Examples:
- https://github.com/sarindufit/angular-ngrx-example/tree/master/angular-ngrx-example
- https://dev.to/avatsaev/simple-state-management-in-angular-with-only-services-and-rxjs-41p8
- https://gist.github.com/seidme/0eab3aa431db2e9b1dceb17a0cc569f7#file-puppies-store-service-ts
