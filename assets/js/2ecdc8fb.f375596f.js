"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[26237],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=o,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return n?a.createElement(h,r(r({ref:t},p),{},{components:n})):a.createElement(h,r({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var c=2;c<i;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},58558:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return d}});var a=n(83117),o=n(80102),i=(n(67294),n(3905)),r=["components"],l={title:"Transactions and Concurrency"},s=void 0,c={unversionedId:"transactions",id:"transactions",title:"Transactions and Concurrency",description:"Starting v3.4, transactions are also supported in MongoDB driver.",source:"@site/docs/transactions.md",sourceDirName:".",slug:"/transactions",permalink:"/docs/next/transactions",draft:!1,editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/docs/transactions.md",tags:[],version:"current",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1666214802,formattedLastUpdatedAt:"Oct 19, 2022",frontMatter:{title:"Transactions and Concurrency"},sidebar:"docs",previous:{title:"Entity Repository",permalink:"/docs/next/repositories"},next:{title:"Inheritance Mapping",permalink:"/docs/next/inheritance-mapping"}},p={},d=[{value:"Transaction Demarcation",id:"transaction-demarcation",level:2},{value:"Approach 1: Implicitly",id:"approach-1-implicitly",level:3},{value:"Approach 2: Explicitly",id:"approach-2-explicitly",level:3},{value:"Exception Handling",id:"exception-handling",level:3},{value:"Locking Support",id:"locking-support",level:2},{value:"Why we need concurrency control?",id:"why-we-need-concurrency-control",level:3},{value:"Optimistic Locking",id:"optimistic-locking",level:3},{value:"Concurrency Checks",id:"concurrency-checks",level:3},{value:"Important Implementation Notes",id:"important-implementation-notes",level:4},{value:"Pessimistic Locking",id:"pessimistic-locking",level:3},{value:"Isolation levels",id:"isolation-levels",level:3}],u={toc:d};function m(e){var t=e.components,n=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Starting v3.4, transactions are also supported in ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/usage-with-mongo"},"MongoDB driver"),".")),(0,i.kt)("h2",{id:"transaction-demarcation"},"Transaction Demarcation"),(0,i.kt)("p",null,"Transaction demarcation is the task of defining your transaction boundaries. Proper\ntransaction demarcation is very important because if not done properly it can negatively\naffect the performance of your application. Many databases and database abstraction\nlayers by default operate in auto-commit mode, which means that every single SQL statement\nis wrapped in a small transaction. Without any explicit transaction demarcation from your\nside, this quickly results in poor performance because transactions are not cheap. "),(0,i.kt)("p",null,"For the most part, MikroORM already takes care of proper transaction demarcation for you:\nAll the write operations (INSERT/UPDATE/DELETE) are queued until ",(0,i.kt)("inlineCode",{parentName:"p"},"em.flush()"),"\nis invoked which wraps all of these changes in a single transaction."),(0,i.kt)("p",null,"However, MikroORM also allows (and encourages) you to take over and control transaction\ndemarcation yourself."),(0,i.kt)("p",null,"These are two ways to deal with transactions when using the MikroORM and are now described\nin more detail."),(0,i.kt)("h3",{id:"approach-1-implicitly"},"Approach 1: Implicitly"),(0,i.kt)("p",null,"The first approach is to use the implicit transaction handling provided by the MikroORM\n",(0,i.kt)("inlineCode",{parentName:"p"},"EntityManager"),". Given the following code snippet, without any explicit transaction\ndemarcation:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const user = new User(...);\nuser.name = 'George';\nawait orm.em.persistAndFlush(user);\n")),(0,i.kt)("p",null,"Since we do not do any custom transaction demarcation in the above code, ",(0,i.kt)("inlineCode",{parentName:"p"},"em.flush()"),"\nwill begin and commit/rollback a transaction. This behavior is made possible by the\naggregation of the DML operations by the MikroORM and is sufficient if all the data\nmanipulation that is part of a unit of work happens through the domain model and thus\nthe ORM."),(0,i.kt)("h3",{id:"approach-2-explicitly"},"Approach 2: Explicitly"),(0,i.kt)("p",null,"The explicit alternative is to use the transactions API directly to control the boundaries.\nThe code then looks like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"await orm.em.transactional(em => {\n  //... do some work\n  const user = new User(...);\n  user.name = 'George';\n  em.persist(user);\n});\n")),(0,i.kt)("p",null,"Or you can use ",(0,i.kt)("inlineCode",{parentName:"p"},"begin/commit/rollback")," methods explicitly. Following example is\nequivalent to the previous one:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const em = orm.em.fork();\nawait em.begin();\n\ntry {\n  //... do some work\n  const user = new User(...);\n  user.name = 'George';\n  em.persist(user);\n  await em.commit(); // will flush before making the actual commit query\n} catch (e) {\n  await em.rollback();\n  throw e;\n}\n")),(0,i.kt)("p",null,"Explicit transaction demarcation is required when you want to include custom DBAL operations\nin a unit of work or when you want to make use of some methods of the EntityManager API\nthat require an active transaction. Such methods will throw a ",(0,i.kt)("inlineCode",{parentName:"p"},"ValidationError")," to inform\nyou of that requirement."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"em.transactional(cb)")," will flush the inner ",(0,i.kt)("inlineCode",{parentName:"p"},"EntityManager")," prior to transaction commit."),(0,i.kt)("h3",{id:"exception-handling"},"Exception Handling"),(0,i.kt)("p",null,"When using implicit transaction demarcation and an exception occurs during\n",(0,i.kt)("inlineCode",{parentName:"p"},"em.flush()"),", the transaction is automatically rolled back."),(0,i.kt)("p",null,"When using explicit transaction demarcation and an exception occurs, the transaction should\nbe rolled back immediately as demonstrated in the example above. This can be handled elegantly\nby the control abstractions shown earlier. Note that when catching Exception you should\ngenerally re-throw the exception. If you intend to recover from some exceptions, catch them\nexplicitly in earlier catch blocks (but do not forget to rollback the transaction). All\nother best practices of exception handling apply similarly (i.e. either log or re-throw,\nnot both, etc.)."),(0,i.kt)("p",null,"As a result of this procedure, all previously managed or removed instances of the ",(0,i.kt)("inlineCode",{parentName:"p"},"EntityManager"),"\nbecome detached. The state of the detached objects will be the state at the point at which the\ntransaction was rolled back. The state of the objects is in no way rolled back and thus the\nobjects are now out of sync with the database. The application can continue to use the detached\nobjects, knowing that their state is potentially no longer accurate."),(0,i.kt)("p",null,"If you intend to start another unit of work after an exception has occurred you should do\nthat with a new ",(0,i.kt)("inlineCode",{parentName:"p"},"EntityManager"),". Simply use ",(0,i.kt)("inlineCode",{parentName:"p"},"em.fork()")," to obtain fresh copy\nwith cleared identity map. "),(0,i.kt)("h2",{id:"locking-support"},"Locking Support"),(0,i.kt)("h3",{id:"why-we-need-concurrency-control"},"Why we need concurrency control?"),(0,i.kt)("p",null,"If transactions are executed serially (one at a time), no transaction concurrency exists.\nHowever, if concurrent transactions with interleaving operations are allowed, you may easily\nrun into one of those problems:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"The lost update problem"),(0,i.kt)("li",{parentName:"ol"},"The dirty read problem"),(0,i.kt)("li",{parentName:"ol"},"The incorrect summary problem")),(0,i.kt)("p",null,"To mitigate those problems, MikroORM offers support for Pessimistic and Optimistic locking\nstrategies natively. This allows you to take very fine-grained control over what kind of\nlocking is required for your entities in your application."),(0,i.kt)("h3",{id:"optimistic-locking"},"Optimistic Locking"),(0,i.kt)("p",null,'Database transactions are fine for concurrency control during a single request. However, a\ndatabase transaction should not span across requests, the so-called "user think time". Therefore\na long-running "business transaction" that spans multiple requests needs to involve several\ndatabase transactions. Thus, database transactions alone can no longer control concurrency\nduring such a long-running business transaction. Concurrency control becomes the partial\nresponsibility of the application itself.'),(0,i.kt)("p",null,"MikroORM has integrated support for automatic optimistic locking via a version field. In\nthis approach any entity that should be protected against concurrent modifications during\nlong-running business transactions gets a version field that is either a simple number\n(mapping type: integer) or a timestamp (mapping type: datetime). When changes to such an\nentity are persisted at the end of a long-running conversation the version of the entity\nis compared to the version in the database and if they don't match, a ",(0,i.kt)("inlineCode",{parentName:"p"},"OptimisticLockError"),"\nis thrown, indicating that the entity has been modified by someone else already."),(0,i.kt)("p",null,"You designate a version field in an entity as follows. In this example we'll use an integer."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"export class User {\n  // ...\n  @Property({ version: true })\n  version!: number;\n  // ...\n}\n")),(0,i.kt)("p",null,"Alternatively a datetime type can be used (which maps to a SQL timestamp or datetime):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"export class User {\n  // ...\n  @Property({ version: true })\n  version!: Date;\n  // ...\n}\n")),(0,i.kt)("p",null,"Version numbers (not timestamps) should however be preferred as they can not potentially\nconflict in a highly concurrent environment, unlike timestamps where this is a possibility,\ndepending on the resolution of the timestamp on the particular database platform."),(0,i.kt)("p",null,"When a version conflict is encountered during ",(0,i.kt)("inlineCode",{parentName:"p"},"em.flush()"),", a ",(0,i.kt)("inlineCode",{parentName:"p"},"OptimisticLockError"),"\nis thrown and the active transaction rolled back (or marked for rollback). This exception\ncan be caught and handled. Potential responses to a ",(0,i.kt)("inlineCode",{parentName:"p"},"OptimisticLockError")," are to present the\nconflict to the user or to refresh or reload objects in a new transaction and then retrying\nthe transaction."),(0,i.kt)("p",null,"The time between showing an update form and actually modifying the entity can in the worst\nscenario be as long as your application's session timeout. If changes happen to the entity\nin that time frame you want to know directly when retrieving the entity that you will hit\nan optimistic locking exception:"),(0,i.kt)("p",null,"You can always verify the version of an entity during a request either when calling\n",(0,i.kt)("inlineCode",{parentName:"p"},"em.findOne()"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const theEntityId = 1;\nconst expectedVersion = 184;\n\ntry {\n  const entity = await orm.em.findOne(User, theEntityId, { lockMode: LockMode.OPTIMISTIC, lockVersion: expectedVersion });\n\n  // do the work\n\n  await orm.em.flush();\n} catch (e) {\n  console.log('Sorry, but someone else has already changed this entity. Please apply the changes again!');\n}\n")),(0,i.kt)("p",null,"Or you can use ",(0,i.kt)("inlineCode",{parentName:"p"},"em.lock()")," to find out:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const theEntityId = 1;\nconst expectedVersion = 184;\nconst entity = await orm.em.findOne(User, theEntityId);\n\ntry {\n    // assert version\n    await orm.em.lock(entity, LockMode.OPTIMISTIC, expectedVersion);\n} catch (e) {\n    console.log('Sorry, but someone else has already changed this entity. Please apply the changes again!');\n}\n")),(0,i.kt)("h3",{id:"concurrency-checks"},"Concurrency Checks"),(0,i.kt)("p",null,"As opposed to version fields that are handled automatically, we can use\nconcurrency checks. They allow us to mark specific properties to be included\nin the concurrency check, just like the version field was. But this time, we\nwill be responsible for updating the fields explicitly."),(0,i.kt)("p",null,"When we try to update such entity without changing one of the concurrency fields,\n",(0,i.kt)("inlineCode",{parentName:"p"},"OptimisticLockError")," will be thrown. Same mechanism is then used to check whether\nthe update succeeded, and throw the same type of error when not."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"@Entity()\nexport class ConcurrencyCheckUser {\n\n  // all primary keys are by default part of the concurrency check\n  @PrimaryKey({ length: 100 })\n  firstName: string;\n\n  // all primary keys are by default part of the concurrency check\n  @PrimaryKey({ length: 100 })\n  lastName: string;\n\n  @Property({ concurrencyCheck: true })\n  age: number;\n\n  @Property({ nullable: true })\n  other?: string;\n\n}\n")),(0,i.kt)("h4",{id:"important-implementation-notes"},"Important Implementation Notes"),(0,i.kt)("p",null,"You can easily get the optimistic locking workflow wrong if you compare the wrong versions.\nSay you have Alice and Bob editing a hypothetical blog post:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'Alice reads the headline of the blog post being "Foo", at optimistic lock version 1 (GET Request)'),(0,i.kt)("li",{parentName:"ul"},'Bob reads the headline of the blog post being "Foo", at optimistic lock version 1 (GET Request)'),(0,i.kt)("li",{parentName:"ul"},'Bob updates the headline to "Bar", upgrading the optimistic lock version to 2 (POST Request of a Form)'),(0,i.kt)("li",{parentName:"ul"},'Alice updates the headline to "Baz", ... (POST Request of a Form)')),(0,i.kt)("p",null,"Now at the last stage of this scenario the blog post has to be read again from the database\nbefore Alice's headline can be applied. At this point you will want to check if the blog\npost is still at version 1 (which it is not in this scenario)."),(0,i.kt)("p",null,"Using optimistic locking correctly, you ",(0,i.kt)("strong",{parentName:"p"},"have")," to add the version as an additional hidden\nfield (or into the session for more safety). Otherwise you cannot verify the version is still\nthe one being originally read from the database when Alice performed her GET request for the\nblog post. If this happens you might see lost updates you wanted to prevent with Optimistic\nLocking."),(0,i.kt)("p",null,"See the example code (frontend):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const res = await fetch('api.example.com/book/123');\nconst book = res.json();\nconsole.log(book.version); // prints the current version\n\n// user does some changes and calls the PUT handler\nconst changes = { title: 'new title' };\nawait fetch('api.example.com/book/123', {\n  method: 'PUT',\n  body: {\n    ...changes,\n    version: book.version,\n  },\n});\n")),(0,i.kt)("p",null,"And the corresponding API endpoints:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"// GET /book/:id\nasync findOne(req, res) {\n  const book = await this.em.findOne(Book, +req.query.id);\n  res.json(book);\n}\n\n// PUT /book/:id\nasync update(req, res) {\n  const book = await this.em.findOne(Book, +req.query.id, { lockMode: LockMode.OPTIMISTIC, lockVersion: req.body.version });\n  wrap(book).assign(req.body);\n  await this.em.flush();\n\n  res.json(book);\n}\n")),(0,i.kt)("p",null,"Your frontend app loads an entity from API, the response includes the version property.\nUser makes some changes and fires PUT request back to the API, with version field included\nin the payload. The PUT handler of the API then reads the version and passes it to the\n",(0,i.kt)("inlineCode",{parentName:"p"},"em.findOne()")," call."),(0,i.kt)("h3",{id:"pessimistic-locking"},"Pessimistic Locking"),(0,i.kt)("p",null,"MikroORM supports Pessimistic Locking at the database level. No attempt is being made to implement\npessimistic locking inside MikroORM, rather vendor-specific and ANSI-SQL commands are used to\nacquire row-level locks. Every Entity can be part of a pessimistic lock, there is no special\nmetadata required to use this feature."),(0,i.kt)("p",null,'However, for Pessimistic Locking to work you have to disable the Auto-Commit Mode of your Database\nand start a transaction around your pessimistic lock use-case using the "Approach 2: Explicit\nTransaction Demarcation" described above. MikroORM will throw an Exception if you attempt to\nacquire a pessimistic lock and no transaction is running.'),(0,i.kt)("p",null,"MikroORM currently supports 6 pessimistic lock modes:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Mode"),(0,i.kt)("th",{parentName:"tr",align:null},"Postgres"),(0,i.kt)("th",{parentName:"tr",align:null},"MySQL"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"LockMode.PESSIMISTIC_READ")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"for share")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"lock in share mode"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"LockMode.PESSIMISTIC_WRITE")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"for update")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"for update"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"LockMode.PESSIMISTIC_PARTIAL_WRITE")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"for update skip locked")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"for update skip locked"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"LockMode.PESSIMISTIC_WRITE_OR_FAIL")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"for update nowait")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"for update nowait"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"LockMode.PESSIMISTIC_PARTIAL_READ")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"for share skip locked")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"lock in share mode skip locked"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"LockMode.PESSIMISTIC_READ_OR_FAIL")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"for share nowait")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"lock in share mode nowait"))))),(0,i.kt)("p",null,"You can use pessimistic locks in three different scenarios:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Using ",(0,i.kt)("inlineCode",{parentName:"li"},"em.findOne(className, id, { lockMode: LockMode.PESSIMISTIC_WRITE })")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"em.findOne(className, id, { lockMode: LockMode.PESSIMISTIC_READ })")),(0,i.kt)("li",{parentName:"ol"},"Using ",(0,i.kt)("inlineCode",{parentName:"li"},"em.lock(entity, LockMode.PESSIMISTIC_WRITE)")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"em.lock(entity, LockMode.PESSIMISTIC_READ)")),(0,i.kt)("li",{parentName:"ol"},"Using ",(0,i.kt)("inlineCode",{parentName:"li"},"QueryBuilder.setLockMode(LockMode.PESSIMISTIC_WRITE)")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"QueryBuilder.setLockMode(LockMode.PESSIMISTIC_READ)"))),(0,i.kt)("p",null,"Optionally we can also pass list of table aliases we want to lock via ",(0,i.kt)("inlineCode",{parentName:"p"},"lockTableAliases")," option:"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"The root entity is always aliased as ",(0,i.kt)("inlineCode",{parentName:"p"},"e0")," when using ",(0,i.kt)("inlineCode",{parentName:"p"},"em.find()")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"em.findOne()"),".")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'const res = await em.find(User, { name: \'Jon\' }, {\n  populate: [\'identities\'],\n  strategy: LoadStrategy.JOINED,\n  lockMode: LockMode.PESSIMISTIC_READ,\n  lockTableAliases: [\'e0\'],\n});\n\n// select ... \n//   from "user" as "e0"\n//   left join "identity" as "i1" on "e0"."id" = "i1"."user_id" \n//   where "e0"."name" = \'Jon\' \n//   for update of "e0" skip locked\n')),(0,i.kt)("h3",{id:"isolation-levels"},"Isolation levels"),(0,i.kt)("p",null,"We can set the transaction isolation levels:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"await orm.em.transactional(async em => {\n  // ...\n}, { isolationLevel: IsolationLevel.READ_UNCOMMITTED });\n")),(0,i.kt)("p",null,"Available isolation levels:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"IsolationLevel.READ_UNCOMMITTED")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"IsolationLevel.READ_COMMITTED")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"IsolationLevel.SNAPSHOT")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"IsolationLevel.REPEATABLE_READ")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"IsolationLevel.SERIALIZABLE"))),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"This part of documentation is highly inspired by ",(0,i.kt)("a",{parentName:"p",href:"https://www.doctrine-project.org/projects/doctrine-orm/en/latest/reference/transactions-and-concurrency.html"},"doctrine internals docs"),"\nas the behaviour here is pretty much the same.")))}m.isMDXComponent=!0}}]);