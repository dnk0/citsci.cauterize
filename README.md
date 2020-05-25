# citsci.cauterize

citsci.cauterize is a citizen project about evaluating robust machine learning algorithms in different test scenarios.
Researchers and citizen scientists alike can publish their algorithms and take part in a community endavour to find general robust machine learning algorithms.

* automatically publish a survey paper every 3-6months concluding new knowledge from all results

* split up research interests by scenario

* e.g. malware detection vs. autonomous driving vs. face recognition vs ...
        
* split up leaderboard by:

* scenario

* by attack scenarios

* by evaluation functions

* advanced filter options

## Motivating People

With regards to open source development and stackeroverflow we see that technical experience and solving real world problems is always a valuable activity. Often these activites are used in CVs to certify problem solving skills. 
We will try to motivate people to contribute by giving them the opportunity to certify their expierience in malware analysis via the web platform.

## Components
### Web-Interface
#### Initial Goals
* show list of available malware scenarios

| Date of submission | Download | Status | Title | Type | Plattform | Evasion against | Author | 
|--------------------|----------|--------|-------|------|-----------|-----------------|--------|
| 2020-05-12 | [Download]() | open    | hlux - modified - 0 padded microsoft word  | Botnet | Windows | Windows Defender | boneymoy88 |
| 2020-05-11 | [Download]() | verified | hlux - modified - 0 padded microsoft excel | Botnet | Windows | Windows Defender | dnk0| 
        
* register with real name      
        * allow access only after review (law shit because of malware)
        * review applications by admins (check with requirements for citizen science)
* peer review process of malware verification (definition is todo)
* filter/search interface for researchers (example interest: show me all modified malware that is verified and evades windows defender)
* export your progress as a experience certificate 
### Data-API
#### Initial Goals
* automate the process of the filter/search interface 
        * make it possible to attach the platform to your training data management system
        * subscribe to queries
* generate signatures of all malware given a query
### Userspace-Interface
#### Initial Goals
* automate the process of creating a lab environment for evaluating malware samples
* provide a documentation interface for your review
