type maybe<T> = T | null
interface IQuery{}
interface IMutation{}
interface ISubscription{}
interface IARGQuery{}
interface IARGMutation{}
interface IARGSubscriptio{}
// INTERFACES 
interface INode {
	id: string
}

interface IActor {
	avatarUrl: string, 
	login: string, 
	resourcePath: string, 
	url: string
}

interface IRegistryPackageOwner {
	id: string
}

interface IRegistryPackageSearch {
	id: string
}

interface IProjectOwner {
	id: string, 
	project: maybe<IProject>, 
	projects: IProjectConnection, 
	projectsResourcePath: string, 
	projectsUrl: string, 
	viewerCanCreateProjects: boolean
}

interface IClosable {
	closed: boolean, 
	closedAt: maybe<string>
}

interface IUpdatable {
	viewerCanUpdate: boolean
}

interface IAssignable {
	assignees: IUserConnection
}

interface IRepositoryOwner {
	avatarUrl: string, 
	id: string, 
	login: string, 
	pinnedRepositories: IRepositoryConnection, 
	repositories: IRepositoryConnection, 
	repository: maybe<IRepository>, 
	resourcePath: string, 
	url: string
}

interface ISubscribable {
	id: string, 
	viewerCanSubscribe: boolean, 
	viewerSubscription: maybe<SubscriptionState>
}

interface IStarrable {
	id: string, 
	stargazers: IStargazerConnection, 
	viewerHasStarred: boolean
}

interface IUniformResourceLocatable {
	resourcePath: string, 
	url: string
}

interface IRepositoryInfo {
	createdAt: string, 
	description: maybe<string>, 
	descriptionHTML: string, 
	forkCount: number, 
	hasIssuesEnabled: boolean, 
	hasWikiEnabled: boolean, 
	homepageUrl: maybe<string>, 
	isArchived: boolean, 
	isFork: boolean, 
	isLocked: boolean, 
	isMirror: boolean, 
	isPrivate: boolean, 
	licenseInfo: maybe<ILicense>, 
	lockReason: maybe<RepositoryLockReason>, 
	mirrorUrl: maybe<string>, 
	name: string, 
	nameWithOwner: string, 
	owner: IRepositoryOwner, 
	pushedAt: maybe<string>, 
	resourcePath: string, 
	shortDescriptionHTML: string, 
	updatedAt: string, 
	url: string
}

interface IComment {
	author: maybe<IActor>, 
	authorAssociation: CommentAuthorAssociation, 
	body: string, 
	bodyHTML: string, 
	bodyText: string, 
	createdAt: string, 
	createdViaEmail: boolean, 
	editor: maybe<IActor>, 
	id: string, 
	includesCreatedEdit: boolean, 
	lastEditedAt: maybe<string>, 
	publishedAt: maybe<string>, 
	updatedAt: string, 
	userContentEdits: maybe<IUserContentEditConnection>, 
	viewerDidAuthor: boolean
}

interface IUpdatableComment {
	viewerCannotUpdateReasons: CommentCannotUpdateReason
}

interface ILabelable {
	labels: maybe<ILabelConnection>
}

interface ILockable {
	activeLockReason: maybe<LockReason>, 
	locked: boolean
}

interface IReactable {
	databaseId: maybe<number>, 
	id: string, 
	reactionGroups: maybe<IReactionGroup>, 
	reactions: IReactionConnection, 
	viewerCanReact: boolean
}

interface IRepositoryNode {
	repository: IRepository
}

interface IDeletable {
	viewerCanDelete: boolean
}

interface IGitObject {
	abbreviatedOid: string, 
	commitResourcePath: string, 
	commitUrl: string, 
	id: string, 
	oid: any, 
	repository: IRepository
}

interface IGitSignature {
	email: string, 
	isValid: boolean, 
	payload: string, 
	signature: string, 
	signer: maybe<IUser>, 
	state: GitSignatureState, 
	wasSignedByGitHub: boolean
}

interface IContribution {
	isRestricted: boolean, 
	occurredAt: string, 
	resourcePath: string, 
	url: string, 
	user: IUser
}
// OBJECT TYPES 
interface IQuery {
	codeOfConduct: maybe<ICodeOfConduct>, 
	codesOfConduct: maybe<ICodeOfConduct>, 
	license: maybe<ILicense>, 
	licenses: ILicense, 
	marketplaceCategories: IMarketplaceCategory, 
	marketplaceCategory: maybe<IMarketplaceCategory>, 
	marketplaceListing: maybe<IMarketplaceListing>, 
	marketplaceListings: IMarketplaceListingConnection, 
	meta: IGitHubMetadata, 
	node: maybe<INode>, 
	nodes: INode, 
	organization: maybe<IOrganization>, 
	rateLimit: maybe<IRateLimit>, 
	relay: IQuery, 
	repository: maybe<IRepository>, 
	repositoryOwner: maybe<IRepositoryOwner>, 
	resource: maybe<IUniformResourceLocatable>, 
	search: ISearchResultItemConnection, 
	securityAdvisories: ISecurityAdvisoryConnection, 
	securityAdvisory: maybe<ISecurityAdvisory>, 
	securityVulnerabilities: ISecurityVulnerabilityConnection, 
	topic: maybe<ITopic>, 
	user: maybe<IUser>, 
	viewer: IUser
}

interface ICodeOfConduct {
	body: maybe<string>, 
	key: string, 
	name: string, 
	url: maybe<string>
}

interface ILicense {
	body: string, 
	conditions: ILicenseRule, 
	description: maybe<string>, 
	featured: boolean, 
	hidden: boolean, 
	id: string, 
	implementation: maybe<string>, 
	key: string, 
	limitations: ILicenseRule, 
	name: string, 
	nickname: maybe<string>, 
	permissions: ILicenseRule, 
	pseudoLicense: boolean, 
	spdxId: maybe<string>, 
	url: maybe<string>
}

interface ILicenseRule {
	description: string, 
	key: string, 
	label: string
}

interface IMarketplaceCategory {
	description: maybe<string>, 
	howItWorks: maybe<string>, 
	id: string, 
	name: string, 
	primaryListingCount: number, 
	resourcePath: string, 
	secondaryListingCount: number, 
	slug: string, 
	url: string
}

interface IMarketplaceListing {
	app: maybe<IApp>, 
	companyUrl: maybe<string>, 
	configurationResourcePath: string, 
	configurationUrl: string, 
	documentationUrl: maybe<string>, 
	extendedDescription: maybe<string>, 
	extendedDescriptionHTML: string, 
	fullDescription: string, 
	fullDescriptionHTML: string, 
	hasApprovalBeenRequested: boolean, 
	hasPublishedFreeTrialPlans: boolean, 
	hasTermsOfService: boolean, 
	howItWorks: maybe<string>, 
	howItWorksHTML: string, 
	id: string, 
	installationUrl: maybe<string>, 
	installedForViewer: boolean, 
	isApproved: boolean, 
	isDelisted: boolean, 
	isDraft: boolean, 
	isPaid: boolean, 
	isRejected: boolean, 
	logoBackgroundColor: string, 
	logoUrl: maybe<string>, 
	name: string, 
	normalizedShortDescription: string, 
	pricingUrl: maybe<string>, 
	primaryCategory: IMarketplaceCategory, 
	privacyPolicyUrl: string, 
	resourcePath: string, 
	screenshotUrls: string, 
	secondaryCategory: maybe<IMarketplaceCategory>, 
	shortDescription: string, 
	slug: string, 
	statusUrl: maybe<string>, 
	supportEmail: maybe<string>, 
	supportUrl: string, 
	termsOfServiceUrl: maybe<string>, 
	url: string, 
	viewerCanAddPlans: boolean, 
	viewerCanApprove: boolean, 
	viewerCanDelist: boolean, 
	viewerCanEdit: boolean, 
	viewerCanEditCategories: boolean, 
	viewerCanEditPlans: boolean, 
	viewerCanRedraft: boolean, 
	viewerCanReject: boolean, 
	viewerCanRequestApproval: boolean, 
	viewerHasPurchased: boolean, 
	viewerHasPurchasedForAllOrganizations: boolean, 
	viewerIsListingAdmin: boolean
}

interface IApp {
	createdAt: string, 
	databaseId: maybe<number>, 
	description: maybe<string>, 
	id: string, 
	logoBackgroundColor: string, 
	logoUrl: string, 
	name: string, 
	slug: string, 
	updatedAt: string, 
	url: string
}

interface IMarketplaceListingConnection {
	edges: maybe<IMarketplaceListingEdge>, 
	nodes: maybe<IMarketplaceListing>, 
	pageInfo: IPageInfo, 
	totalCount: number
}

interface IMarketplaceListingEdge {
	cursor: string, 
	node: maybe<IMarketplaceListing>
}

interface IPageInfo {
	endCursor: maybe<string>, 
	hasNextPage: boolean, 
	hasPreviousPage: boolean, 
	startCursor: maybe<string>
}

interface IGitHubMetadata {
	gitHubServicesSha: any, 
	gitIpAddresses: maybe<string>, 
	hookIpAddresses: maybe<string>, 
	importerIpAddresses: maybe<string>, 
	isPasswordAuthenticationVerifiable: boolean, 
	pagesIpAddresses: maybe<string>
}

interface IOrganization {
	avatarUrl: string, 
	databaseId: maybe<number>, 
	description: maybe<string>, 
	email: maybe<string>, 
	id: string, 
	isVerified: boolean, 
	location: maybe<string>, 
	login: string, 
	members: IUserConnection, 
	membersWithRole: IOrganizationMemberConnection, 
	name: maybe<string>, 
	newTeamResourcePath: string, 
	newTeamUrl: string, 
	organizationBillingEmail: maybe<string>, 
	pendingMembers: IUserConnection, 
	pinnedRepositories: IRepositoryConnection, 
	project: maybe<IProject>, 
	projects: IProjectConnection, 
	projectsResourcePath: string, 
	projectsUrl: string, 
	repositories: IRepositoryConnection, 
	repository: maybe<IRepository>, 
	requiresTwoFactorAuthentication: maybe<boolean>, 
	resourcePath: string, 
	samlIdentityProvider: maybe<IOrganizationIdentityProvider>, 
	team: maybe<ITeam>, 
	teams: ITeamConnection, 
	teamsResourcePath: string, 
	teamsUrl: string, 
	url: string, 
	viewerCanAdminister: boolean, 
	viewerCanCreateProjects: boolean, 
	viewerCanCreateRepositories: boolean, 
	viewerCanCreateTeams: boolean, 
	viewerIsAMember: boolean, 
	websiteUrl: maybe<string>
}

interface IProject {
	body: maybe<string>, 
	bodyHTML: string, 
	closed: boolean, 
	closedAt: maybe<string>, 
	columns: IProjectColumnConnection, 
	createdAt: string, 
	creator: maybe<IActor>, 
	databaseId: maybe<number>, 
	id: string, 
	name: string, 
	number: number, 
	owner: IProjectOwner, 
	pendingCards: IProjectCardConnection, 
	resourcePath: string, 
	state: ProjectState, 
	updatedAt: string, 
	url: string, 
	viewerCanUpdate: boolean
}

interface IProjectColumnConnection {
	edges: maybe<IProjectColumnEdge>, 
	nodes: maybe<IProjectColumn>, 
	pageInfo: IPageInfo, 
	totalCount: number
}

interface IProjectColumnEdge {
	cursor: string, 
	node: maybe<IProjectColumn>
}

interface IProjectColumn {
	cards: IProjectCardConnection, 
	createdAt: string, 
	databaseId: maybe<number>, 
	id: string, 
	name: string, 
	project: IProject, 
	purpose: maybe<ProjectColumnPurpose>, 
	resourcePath: string, 
	updatedAt: string, 
	url: string
}

interface IProjectCardConnection {
	edges: maybe<IProjectCardEdge>, 
	nodes: maybe<IProjectCard>, 
	pageInfo: IPageInfo, 
	totalCount: number
}

interface IProjectCardEdge {
	cursor: string, 
	node: maybe<IProjectCard>
}

interface IProjectCard {
	column: maybe<IProjectColumn>, 
	content: maybe<ProjectCardItem>, 
	createdAt: string, 
	creator: maybe<IActor>, 
	databaseId: maybe<number>, 
	id: string, 
	isArchived: boolean, 
	note: maybe<string>, 
	project: IProject, 
	resourcePath: string, 
	state: maybe<ProjectCardState>, 
	updatedAt: string, 
	url: string
}

interface IIssue {
	activeLockReason: maybe<LockReason>, 
	assignees: IUserConnection, 
	author: maybe<IActor>, 
	authorAssociation: CommentAuthorAssociation, 
	body: string, 
	bodyHTML: string, 
	bodyText: string, 
	closed: boolean, 
	closedAt: maybe<string>, 
	comments: IIssueCommentConnection, 
	createdAt: string, 
	createdViaEmail: boolean, 
	databaseId: maybe<number>, 
	editor: maybe<IActor>, 
	id: string, 
	includesCreatedEdit: boolean, 
	labels: maybe<ILabelConnection>, 
	lastEditedAt: maybe<string>, 
	locked: boolean, 
	milestone: maybe<IMilestone>, 
	number: number, 
	participants: IUserConnection, 
	projectCards: IProjectCardConnection, 
	publishedAt: maybe<string>, 
	reactionGroups: maybe<IReactionGroup>, 
	reactions: IReactionConnection, 
	repository: IRepository, 
	resourcePath: string, 
	state: IssueState, 
	timeline: IIssueTimelineConnection, 
	title: string, 
	updatedAt: string, 
	url: string, 
	userContentEdits: maybe<IUserContentEditConnection>, 
	viewerCanReact: boolean, 
	viewerCanSubscribe: boolean, 
	viewerCanUpdate: boolean, 
	viewerCannotUpdateReasons: CommentCannotUpdateReason, 
	viewerDidAuthor: boolean, 
	viewerSubscription: maybe<SubscriptionState>
}

interface IUserConnection {
	edges: maybe<IUserEdge>, 
	nodes: maybe<IUser>, 
	pageInfo: IPageInfo, 
	totalCount: number
}

interface IUserEdge {
	cursor: string, 
	node: maybe<IUser>
}

interface IUser {
	avatarUrl: string, 
	bio: maybe<string>, 
	bioHTML: string, 
	commitComments: ICommitCommentConnection, 
	company: maybe<string>, 
	companyHTML: string, 
	contributionsCollection: IContributionsCollection, 
	createdAt: string, 
	databaseId: maybe<number>, 
	email: string, 
	followers: IFollowerConnection, 
	following: IFollowingConnection, 
	gist: maybe<IGist>, 
	gistComments: IGistCommentConnection, 
	gists: IGistConnection, 
	id: string, 
	isBountyHunter: boolean, 
	isCampusExpert: boolean, 
	isDeveloperProgramMember: boolean, 
	isEmployee: boolean, 
	isHireable: boolean, 
	isSiteAdmin: boolean, 
	isViewer: boolean, 
	issueComments: IIssueCommentConnection, 
	issues: IIssueConnection, 
	location: maybe<string>, 
	login: string, 
	name: maybe<string>, 
	organization: maybe<IOrganization>, 
	organizations: IOrganizationConnection, 
	pinnedRepositories: IRepositoryConnection, 
	publicKeys: IPublicKeyConnection, 
	pullRequests: IPullRequestConnection, 
	repositories: IRepositoryConnection, 
	repositoriesContributedTo: IRepositoryConnection, 
	repository: maybe<IRepository>, 
	resourcePath: string, 
	starredRepositories: IStarredRepositoryConnection, 
	updatedAt: string, 
	url: string, 
	viewerCanFollow: boolean, 
	viewerIsFollowing: boolean, 
	watching: IRepositoryConnection, 
	websiteUrl: maybe<string>
}

interface IRepositoryConnection {
	edges: maybe<IRepositoryEdge>, 
	nodes: maybe<IRepository>, 
	pageInfo: IPageInfo, 
	totalCount: number, 
	totalDiskUsage: number
}

interface IRepositoryEdge {
	cursor: string, 
	node: maybe<IRepository>
}

interface IRepository {
	assignableUsers: IUserConnection, 
	branchProtectionRules: IBranchProtectionRuleConnection, 
	codeOfConduct: maybe<ICodeOfConduct>, 
	collaborators: maybe<IRepositoryCollaboratorConnection>, 
	commitComments: ICommitCommentConnection, 
	createdAt: string, 
	databaseId: maybe<number>, 
	defaultBranchRef: maybe<IRef>, 
	deployKeys: IDeployKeyConnection, 
	deployments: IDeploymentConnection, 
	description: maybe<string>, 
	descriptionHTML: string, 
	diskUsage: maybe<number>, 
	forkCount: number, 
	forks: IRepositoryConnection, 
	hasIssuesEnabled: boolean, 
	hasWikiEnabled: boolean, 
	homepageUrl: maybe<string>, 
	id: string, 
	isArchived: boolean, 
	isFork: boolean, 
	isLocked: boolean, 
	isMirror: boolean, 
	isPrivate: boolean, 
	issue: maybe<IIssue>, 
	issueOrPullRequest: maybe<IssueOrPullRequest>, 
	issues: IIssueConnection, 
	label: maybe<ILabel>, 
	labels: maybe<ILabelConnection>, 
	languages: maybe<ILanguageConnection>, 
	licenseInfo: maybe<ILicense>, 
	lockReason: maybe<RepositoryLockReason>, 
	mentionableUsers: IUserConnection, 
	mergeCommitAllowed: boolean, 
	milestone: maybe<IMilestone>, 
	milestones: maybe<IMilestoneConnection>, 
	mirrorUrl: maybe<string>, 
	name: string, 
	nameWithOwner: string, 
	object: maybe<IGitObject>, 
	owner: IRepositoryOwner, 
	parent: maybe<IRepository>, 
	primaryLanguage: maybe<ILanguage>, 
	project: maybe<IProject>, 
	projects: IProjectConnection, 
	projectsResourcePath: string, 
	projectsUrl: string, 
	protectedBranches: IProtectedBranchConnection, 
	pullRequest: maybe<IPullRequest>, 
	pullRequests: IPullRequestConnection, 
	pushedAt: maybe<string>, 
	rebaseMergeAllowed: boolean, 
	ref: maybe<IRef>, 
	refs: maybe<IRefConnection>, 
	release: maybe<IRelease>, 
	releases: IReleaseConnection, 
	repositoryTopics: IRepositoryTopicConnection, 
	resourcePath: string, 
	shortDescriptionHTML: string, 
	squashMergeAllowed: boolean, 
	sshUrl: any, 
	stargazers: IStargazerConnection, 
	updatedAt: string, 
	url: string, 
	viewerCanAdminister: boolean, 
	viewerCanCreateProjects: boolean, 
	viewerCanSubscribe: boolean, 
	viewerCanUpdateTopics: boolean, 
	viewerHasStarred: boolean, 
	viewerPermission: maybe<RepositoryPermission>, 
	viewerSubscription: maybe<SubscriptionState>, 
	watchers: IUserConnection
}

interface IStargazerConnection {
	edges: maybe<IStargazerEdge>, 
	nodes: maybe<IUser>, 
	pageInfo: IPageInfo, 
	totalCount: number
}

interface IStargazerEdge {
	cursor: string, 
	node: IUser, 
	starredAt: string
}

interface IBranchProtectionRuleConnection {
	edges: maybe<IBranchProtectionRuleEdge>, 
	nodes: maybe<IBranchProtectionRule>, 
	pageInfo: IPageInfo, 
	totalCount: number
}

interface IBranchProtectionRuleEdge {
	cursor: string, 
	node: maybe<IBranchProtectionRule>
}

interface IBranchProtectionRule {
	branchProtectionRuleConflicts: IBranchProtectionRuleConflictConnection, 
	creator: maybe<IActor>, 
	databaseId: maybe<number>, 
	dismissesStaleReviews: boolean, 
	id: string, 
	isAdminEnforced: boolean, 
	matchingRefs: IRefConnection, 
	pattern: string, 
	pushAllowances: IPushAllowanceConnection, 
	repository: maybe<IRepository>, 
	requiredApprovingReviewCount: maybe<number>, 
	requiredStatusCheckContexts: maybe<string>, 
	requiresApprovingReviews: boolean, 
	requiresCommitSignatures: boolean, 
	requiresStatusChecks: boolean, 
	requiresStrictStatusChecks: boolean, 
	restrictsPushes: boolean, 
	restrictsReviewDismissals: boolean, 
	reviewDismissalAllowances: IReviewDismissalAllowanceConnection
}

interface IBranchProtectionRuleConflictConnection {
	edges: maybe<IBranchProtectionRuleConflictEdge>, 
	nodes: maybe<IBranchProtectionRuleConflict>, 
	pageInfo: IPageInfo, 
	totalCount: number
}

interface IBranchProtectionRuleConflictEdge {
	cursor: string, 
	node: maybe<IBranchProtectionRuleConflict>
}

interface IBranchProtectionRuleConflict {
	branchProtectionRule: maybe<IBranchProtectionRule>, 
	conflictingBranchProtectionRule: maybe<IBranchProtectionRule>, 
	ref: maybe<IRef>
}

interface IRef {
	associatedPullRequests: IPullRequestConnection, 
	id: string, 
	name: string, 
	prefix: string, 
	repository: IRepository, 
	target: IGitObject
}

interface IPullRequestConnection {
	edges: maybe<IPullRequestEdge>, 
	nodes: maybe<IPullRequest>, 
	pageInfo: IPageInfo, 
	totalCount: number
}

interface IPullRequestEdge {
	cursor: string, 
	node: maybe<IPullRequest>
}

interface IPullRequest {
	activeLockReason: maybe<LockReason>, 
	additions: number, 
	assignees: IUserConnection, 
	author: maybe<IActor>, 
	authorAssociation: CommentAuthorAssociation, 
	baseRef: maybe<IRef>, 
	baseRefName: string, 
	baseRefOid: any, 
	body: string, 
	bodyHTML: string, 
	bodyText: string, 
	changedFiles: number, 
	closed: boolean, 
	closedAt: maybe<string>, 
	comments: IIssueCommentConnection, 
	commits: IPullRequestCommitConnection, 
	createdAt: string, 
	createdViaEmail: boolean, 
	databaseId: maybe<number>, 
	deletions: number, 
	editor: maybe<IActor>, 
	headRef: maybe<IRef>, 
	headRefName: string, 
	headRefOid: any, 
	headRepository: maybe<IRepository>, 
	headRepositoryOwner: maybe<IRepositoryOwner>, 
	id: string, 
	includesCreatedEdit: boolean, 
	isCrossRepository: boolean, 
	labels: maybe<ILabelConnection>, 
	lastEditedAt: maybe<string>, 
	locked: boolean, 
	maintainerCanModify: boolean, 
	mergeCommit: maybe<ICommit>, 
	mergeable: MergeableState, 
	merged: boolean, 
	mergedAt: maybe<string>, 
	mergedBy: maybe<IActor>, 
	milestone: maybe<IMilestone>, 
	number: number, 
	participants: IUserConnection, 
	permalink: string, 
	potentialMergeCommit: maybe<ICommit>, 
	projectCards: IProjectCardConnection, 
	publishedAt: maybe<string>, 
	reactionGroups: maybe<IReactionGroup>, 
	reactions: IReactionConnection, 
	repository: IRepository, 
	resourcePath: string, 
	revertResourcePath: string, 
	revertUrl: string, 
	reviewRequests: maybe<IReviewRequestConnection>, 
	reviews: maybe<IPullRequestReviewConnection>, 
	state: PullRequestState, 
	suggestedReviewers: ISuggestedReviewer, 
	timeline: IPullRequestTimelineConnection, 
	title: string, 
	updatedAt: string, 
	url: string, 
	userContentEdits: maybe<IUserContentEditConnection>, 
	viewerCanApplySuggestion: boolean, 
	viewerCanReact: boolean, 
	viewerCanSubscribe: boolean, 
	viewerCanUpdate: boolean, 
	viewerCannotUpdateReasons: CommentCannotUpdateReason, 
	viewerDidAuthor: boolean, 
	viewerSubscription: maybe<SubscriptionState>
}

interface IUserContentEditConnection {
	edges: maybe<IUserContentEditEdge>, 
	nodes: maybe<IUserContentEdit>, 
	pageInfo: IPageInfo, 
	totalCount: number
}

interface IUserContentEditEdge {
	cursor: string, 
	node: maybe<IUserContentEdit>
}

interface IUserContentEdit {
	createdAt: string, 
	deletedAt: maybe<string>, 
	deletedBy: maybe<IActor>, 
	diff: maybe<string>, 
	editedAt: string, 
	editor: maybe<IActor>, 
	id: string, 
	updatedAt: string
}

interface ILabelConnection {
	edges: maybe<ILabelEdge>, 
	nodes: maybe<ILabel>, 
	pageInfo: IPageInfo, 
	totalCount: number
}

interface ILabelEdge {
	cursor: string, 
	node: maybe<ILabel>
}

interface ILabel {
	color: string, 
	createdAt: maybe<string>, 
	description: maybe<string>, 
	id: string, 
	isDefault: boolean, 
	issues: IIssueConnection, 
	name: string, 
	pullRequests: IPullRequestConnection, 
	repository: IRepository, 
	resourcePath: string, 
	updatedAt: maybe<string>, 
	url: string
}

interface IIssueConnection {
	edges: maybe<IIssueEdge>, 
	nodes: maybe<IIssue>, 
	pageInfo: IPageInfo, 
	totalCount: number
}

interface IIssueEdge {
	cursor: string, 
	node: maybe<IIssue>
}

interface IReactionGroup {
	content: ReactionContent, 
	createdAt: maybe<string>, 
	subject: IReactable, 
	users: IReactingUserConnection, 
	viewerHasReacted: boolean
}

interface IReactingUserConnection {
	edges: maybe<IReactingUserEdge>, 
	nodes: maybe<IUser>, 
	pageInfo: IPageInfo, 
	totalCount: number
}

interface IReactingUserEdge {
	cursor: string, 
	node: IUser, 
	reactedAt: string
}

interface IReactionConnection {
	edges: maybe<IReactionEdge>, 
	nodes: maybe<IReaction>, 
	pageInfo: IPageInfo, 
	totalCount: number, 
	viewerHasReacted: boolean
}

interface IReactionEdge {
	cursor: string, 
	node: maybe<IReaction>
}

interface IReaction {
	content: ReactionContent, 
	createdAt: string, 
	databaseId: maybe<number>, 
	id: string, 
	reactable: IReactable, 
	user: maybe<IUser>
}

interface IIssueCommentConnection {
	edges: maybe<IIssueCommentEdge>, 
	nodes: maybe<IIssueComment>, 
	pageInfo: IPageInfo, 
	totalCount: number
}

interface IIssueCommentEdge {
	cursor: string, 
	node: maybe<IIssueComment>
}

interface IIssueComment {
	author: maybe<IActor>, 
	authorAssociation: CommentAuthorAssociation, 
	body: string, 
	bodyHTML: string, 
	bodyText: string, 
	createdAt: string, 
	createdViaEmail: boolean, 
	databaseId: maybe<number>, 
	editor: maybe<IActor>, 
	id: string, 
	includesCreatedEdit: boolean, 
	isMinimized: boolean, 
	issue: IIssue, 
	lastEditedAt: maybe<string>, 
	minimizedReason: maybe<string>, 
	publishedAt: maybe<string>, 
	pullRequest: maybe<IPullRequest>, 
	reactionGroups: maybe<IReactionGroup>, 
	reactions: IReactionConnection, 
	repository: IRepository, 
	resourcePath: string, 
	updatedAt: string, 
	url: string, 
	userContentEdits: maybe<IUserContentEditConnection>, 
	viewerCanDelete: boolean, 
	viewerCanMinimize: boolean, 
	viewerCanReact: boolean, 
	viewerCanUpdate: boolean, 
	viewerCannotUpdateReasons: CommentCannotUpdateReason, 
	viewerDidAuthor: boolean
}

interface IPullRequestCommitConnection {
	edges: maybe<IPullRequestCommitEdge>, 
	nodes: maybe<IPullRequestCommit>, 
	pageInfo: IPageInfo, 
	totalCount: number
}

interface IPullRequestCommitEdge {
	cursor: string, 
	node: maybe<IPullRequestCommit>
}

interface IPullRequestCommit {
	commit: ICommit, 
	id: string, 
	pullRequest: IPullRequest, 
	resourcePath: string, 
	url: string
}

interface ICommit {
	abbreviatedOid: string, 
	additions: number, 
	author: maybe<IGitActor>, 
	authoredByCommitter: boolean, 
	authoredDate: string, 
	blame: IBlame, 
	changedFiles: number, 
	comments: ICommitCommentConnection, 
	commitResourcePath: string, 
	commitUrl: string, 
	committedDate: string, 
	committedViaWeb: boolean, 
	committer: maybe<IGitActor>, 
	deletions: number, 
	history: ICommitHistoryConnection, 
	id: string, 
	message: string, 
	messageBody: string, 
	messageBodyHTML: string, 
	messageHeadline: string, 
	messageHeadlineHTML: string, 
	oid: any, 
	parents: ICommitConnection, 
	pushedDate: maybe<string>, 
	repository: IRepository, 
	resourcePath: string, 
	signature: maybe<IGitSignature>, 
	status: maybe<IStatus>, 
	tarballUrl: string, 
	tree: ITree, 
	treeResourcePath: string, 
	treeUrl: string, 
	url: string, 
	viewerCanSubscribe: boolean, 
	viewerSubscription: maybe<SubscriptionState>, 
	zipballUrl: string
}

interface IGitActor {
	avatarUrl: string, 
	date: maybe<any>, 
	email: maybe<string>, 
	name: maybe<string>, 
	user: maybe<IUser>
}

interface IBlame {
	ranges: IBlameRange
}

interface IBlameRange {
	age: number, 
	commit: ICommit, 
	endingLine: number, 
	startingLine: number
}

interface ICommitCommentConnection {
	edges: maybe<ICommitCommentEdge>, 
	nodes: maybe<ICommitComment>, 
	pageInfo: IPageInfo, 
	totalCount: number
}

interface ICommitCommentEdge {
	cursor: string, 
	node: maybe<ICommitComment>
}

interface ICommitComment {
	author: maybe<IActor>, 
	authorAssociation: CommentAuthorAssociation, 
	body: string, 
	bodyHTML: string, 
	bodyText: string, 
	commit: maybe<ICommit>, 
	createdAt: string, 
	createdViaEmail: boolean, 
	databaseId: maybe<number>, 
	editor: maybe<IActor>, 
	id: string, 
	includesCreatedEdit: boolean, 
	isMinimized: boolean, 
	lastEditedAt: maybe<string>, 
	minimizedReason: maybe<string>, 
	path: maybe<string>, 
	position: maybe<number>, 
	publishedAt: maybe<string>, 
	reactionGroups: maybe<IReactionGroup>, 
	reactions: IReactionConnection, 
	repository: IRepository, 
	resourcePath: string, 
	updatedAt: string, 
	url: string, 
	userContentEdits: maybe<IUserContentEditConnection>, 
	viewerCanDelete: boolean, 
	viewerCanMinimize: boolean, 
	viewerCanReact: boolean, 
	viewerCanUpdate: boolean, 
	viewerCannotUpdateReasons: CommentCannotUpdateReason, 
	viewerDidAuthor: boolean
}

interface ICommitHistoryConnection {
	edges: maybe<ICommitEdge>, 
	nodes: maybe<ICommit>, 
	pageInfo: IPageInfo, 
	totalCount: number
}

interface ICommitEdge {
	cursor: string, 
	node: maybe<ICommit>
}

interface ICommitConnection {
	edges: maybe<ICommitEdge>, 
	nodes: maybe<ICommit>, 
	pageInfo: IPageInfo, 
	totalCount: number
}

interface IStatus {
	commit: maybe<ICommit>, 
	context: maybe<IStatusContext>, 
	contexts: IStatusContext, 
	id: string, 
	state: StatusState
}

interface IStatusContext {
	commit: maybe<ICommit>, 
	context: string, 
	createdAt: string, 
	creator: maybe<IActor>, 
	description: maybe<string>, 
	id: string, 
	state: StatusState, 
	targetUrl: maybe<string>
}

interface ITree {
	abbreviatedOid: string, 
	commitResourcePath: string, 
	commitUrl: string, 
	entries: maybe<ITreeEntry>, 
	id: string, 
	oid: any, 
	repository: IRepository
}

interface ITreeEntry {
	mode: number, 
	name: string, 
	object: maybe<IGitObject>, 
	oid: any, 
	repository: IRepository, 
	type: string
}

interface IMilestone {
	closed: boolean, 
	closedAt: maybe<string>, 
	createdAt: string, 
	creator: maybe<IActor>, 
	description: maybe<string>, 
	dueOn: maybe<string>, 
	id: string, 
	issues: IIssueConnection, 
	number: number, 
	pullRequests: IPullRequestConnection, 
	repository: IRepository, 
	resourcePath: string, 
	state: MilestoneState, 
	title: string, 
	updatedAt: string, 
	url: string
}

interface IReviewRequestConnection {
	edges: maybe<IReviewRequestEdge>, 
	nodes: maybe<IReviewRequest>, 
	pageInfo: IPageInfo, 
	totalCount: number
}

interface IReviewRequestEdge {
	cursor: string, 
	node: maybe<IReviewRequest>
}

interface IReviewRequest {
	databaseId: maybe<number>, 
	id: string, 
	pullRequest: IPullRequest, 
	requestedReviewer: maybe<RequestedReviewer>
}

interface ITeam {
	ancestors: ITeamConnection, 
	avatarUrl: maybe<string>, 
	childTeams: ITeamConnection, 
	combinedSlug: string, 
	createdAt: string, 
	description: maybe<string>, 
	editTeamResourcePath: string, 
	editTeamUrl: string, 
	id: string, 
	invitations: maybe<IOrganizationInvitationConnection>, 
	members: ITeamMemberConnection, 
	membersResourcePath: string, 
	membersUrl: string, 
	name: string, 
	newTeamResourcePath: string, 
	newTeamUrl: string, 
	organization: IOrganization, 
	parentTeam: maybe<ITeam>, 
	privacy: TeamPrivacy, 
	repositories: ITeamRepositoryConnection, 
	repositoriesResourcePath: string, 
	repositoriesUrl: string, 
	resourcePath: string, 
	slug: string, 
	teamsResourcePath: string, 
	teamsUrl: string, 
	updatedAt: string, 
	url: string, 
	viewerCanAdminister: boolean, 
	viewerCanSubscribe: boolean, 
	viewerSubscription: maybe<SubscriptionState>
}

interface ITeamConnection {
	edges: maybe<ITeamEdge>, 
	nodes: maybe<ITeam>, 
	pageInfo: IPageInfo, 
	totalCount: number
}

interface ITeamEdge {
	cursor: string, 
	node: maybe<ITeam>
}

interface IOrganizationInvitationConnection {
	edges: maybe<IOrganizationInvitationEdge>, 
	nodes: maybe<IOrganizationInvitation>, 
	pageInfo: IPageInfo, 
	totalCount: number
}

interface IOrganizationInvitationEdge {
	cursor: string, 
	node: maybe<IOrganizationInvitation>
}

interface IOrganizationInvitation {
	createdAt: string, 
	email: maybe<string>, 
	id: string, 
	invitationType: OrganizationInvitationType, 
	invitee: maybe<IUser>, 
	inviter: IUser, 
	organization: IOrganization, 
	role: OrganizationInvitationRole
}

interface ITeamMemberConnection {
	edges: maybe<ITeamMemberEdge>, 
	nodes: maybe<IUser>, 
	pageInfo: IPageInfo, 
	totalCount: number
}

interface ITeamMemberEdge {
	cursor: string, 
	memberAccessResourcePath: string, 
	memberAccessUrl: string, 
	node: IUser, 
	role: TeamMemberRole
}

interface ITeamRepositoryConnection {
	edges: maybe<ITeamRepositoryEdge>, 
	nodes: maybe<IRepository>, 
	pageInfo: IPageInfo, 
	totalCount: number
}

interface ITeamRepositoryEdge {
	cursor: string, 
	node: IRepository, 
	permission: RepositoryPermission
}

interface IPullRequestReviewConnection {
	edges: maybe<IPullRequestReviewEdge>, 
	nodes: maybe<IPullRequestReview>, 
	pageInfo: IPageInfo, 
	totalCount: number
}

interface IPullRequestReviewEdge {
	cursor: string, 
	node: maybe<IPullRequestReview>
}

interface IPullRequestReview {
	author: maybe<IActor>, 
	authorAssociation: CommentAuthorAssociation, 
	body: string, 
	bodyHTML: string, 
	bodyText: string, 
	comments: IPullRequestReviewCommentConnection, 
	commit: maybe<ICommit>, 
	createdAt: string, 
	createdViaEmail: boolean, 
	databaseId: maybe<number>, 
	editor: maybe<IActor>, 
	id: string, 
	includesCreatedEdit: boolean, 
	lastEditedAt: maybe<string>, 
	onBehalfOf: ITeamConnection, 
	publishedAt: maybe<string>, 
	pullRequest: IPullRequest, 
	reactionGroups: maybe<IReactionGroup>, 
	reactions: IReactionConnection, 
	repository: IRepository, 
	resourcePath: string, 
	state: PullRequestReviewState, 
	submittedAt: maybe<string>, 
	updatedAt: string, 
	url: string, 
	userContentEdits: maybe<IUserContentEditConnection>, 
	viewerCanDelete: boolean, 
	viewerCanReact: boolean, 
	viewerCanUpdate: boolean, 
	viewerCannotUpdateReasons: CommentCannotUpdateReason, 
	viewerDidAuthor: boolean
}

interface IPullRequestReviewCommentConnection {
	edges: maybe<IPullRequestReviewCommentEdge>, 
	nodes: maybe<IPullRequestReviewComment>, 
	pageInfo: IPageInfo, 
	totalCount: number
}

interface IPullRequestReviewCommentEdge {
	cursor: string, 
	node: maybe<IPullRequestReviewComment>
}

interface IPullRequestReviewComment {
	author: maybe<IActor>, 
	authorAssociation: CommentAuthorAssociation, 
	body: string, 
	bodyHTML: string, 
	bodyText: string, 
	commit: ICommit, 
	createdAt: string, 
	createdViaEmail: boolean, 
	databaseId: maybe<number>, 
	diffHunk: string, 
	draftedAt: string, 
	editor: maybe<IActor>, 
	id: string, 
	includesCreatedEdit: boolean, 
	isMinimized: boolean, 
	lastEditedAt: maybe<string>, 
	minimizedReason: maybe<string>, 
	originalCommit: maybe<ICommit>, 
	originalPosition: number, 
	outdated: boolean, 
	path: string, 
	position: maybe<number>, 
	publishedAt: maybe<string>, 
	pullRequest: IPullRequest, 
	pullRequestReview: maybe<IPullRequestReview>, 
	reactionGroups: maybe<IReactionGroup>, 
	reactions: IReactionConnection, 
	replyTo: maybe<IPullRequestReviewComment>, 
	repository: IRepository, 
	resourcePath: string, 
	state: PullRequestReviewCommentState, 
	updatedAt: string, 
	url: string, 
	userContentEdits: maybe<IUserContentEditConnection>, 
	viewerCanDelete: boolean, 
	viewerCanMinimize: boolean, 
	viewerCanReact: boolean, 
	viewerCanUpdate: boolean, 
	viewerCannotUpdateReasons: CommentCannotUpdateReason, 
	viewerDidAuthor: boolean
}

interface ISuggestedReviewer {
	isAuthor: boolean, 
	isCommenter: boolean, 
	reviewer: IUser
}

interface IPullRequestTimelineConnection {
	edges: maybe<IPullRequestTimelineItemEdge>, 
	nodes: maybe<PullRequestTimelineItem>, 
	pageInfo: IPageInfo, 
	totalCount: number
}

interface IPullRequestTimelineItemEdge {
	cursor: string, 
	node: maybe<PullRequestTimelineItem>
}

interface ICommitCommentThread {
	comments: ICommitCommentConnection, 
	commit: ICommit, 
	id: string, 
	path: maybe<string>, 
	position: maybe<number>, 
	repository: IRepository
}

interface IPullRequestReviewThread {
	comments: IPullRequestReviewCommentConnection, 
	id: string, 
	pullRequest: IPullRequest, 
	repository: IRepository
}

interface IClosedEvent {
	actor: maybe<IActor>, 
	closable: IClosable, 
	closer: maybe<Closer>, 
	createdAt: string, 
	id: string, 
	resourcePath: string, 
	url: string
}

interface IReopenedEvent {
	actor: maybe<IActor>, 
	closable: IClosable, 
	createdAt: string, 
	id: string
}

interface ISubscribedEvent {
	actor: maybe<IActor>, 
	createdAt: string, 
	id: string, 
	subscribable: ISubscribable
}

interface IUnsubscribedEvent {
	actor: maybe<IActor>, 
	createdAt: string, 
	id: string, 
	subscribable: ISubscribable
}

interface IMergedEvent {
	actor: maybe<IActor>, 
	commit: maybe<ICommit>, 
	createdAt: string, 
	id: string, 
	mergeRef: maybe<IRef>, 
	mergeRefName: string, 
	pullRequest: IPullRequest, 
	resourcePath: string, 
	url: string
}

interface IReferencedEvent {
	actor: maybe<IActor>, 
	commit: maybe<ICommit>, 
	commitRepository: IRepository, 
	createdAt: string, 
	id: string, 
	isCrossRepository: boolean, 
	isDirectReference: boolean, 
	subject: ReferencedSubject
}

interface ICrossReferencedEvent {
	actor: maybe<IActor>, 
	createdAt: string, 
	id: string, 
	isCrossRepository: boolean, 
	referencedAt: string, 
	resourcePath: string, 
	source: ReferencedSubject, 
	target: ReferencedSubject, 
	url: string, 
	willCloseTarget: boolean
}

interface IAssignedEvent {
	actor: maybe<IActor>, 
	assignable: IAssignable, 
	createdAt: string, 
	id: string, 
	user: maybe<IUser>
}

interface IUnassignedEvent {
	actor: maybe<IActor>, 
	assignable: IAssignable, 
	createdAt: string, 
	id: string, 
	user: maybe<IUser>
}

interface ILabeledEvent {
	actor: maybe<IActor>, 
	createdAt: string, 
	id: string, 
	label: ILabel, 
	labelable: ILabelable
}

interface IUnlabeledEvent {
	actor: maybe<IActor>, 
	createdAt: string, 
	id: string, 
	label: ILabel, 
	labelable: ILabelable
}

interface IMilestonedEvent {
	actor: maybe<IActor>, 
	createdAt: string, 
	id: string, 
	milestoneTitle: string, 
	subject: MilestoneItem
}

interface IDemilestonedEvent {
	actor: maybe<IActor>, 
	createdAt: string, 
	id: string, 
	milestoneTitle: string, 
	subject: MilestoneItem
}

interface IRenamedTitleEvent {
	actor: maybe<IActor>, 
	createdAt: string, 
	currentTitle: string, 
	id: string, 
	previousTitle: string, 
	subject: RenamedTitleSubject
}

interface ILockedEvent {
	actor: maybe<IActor>, 
	createdAt: string, 
	id: string, 
	lockReason: maybe<LockReason>, 
	lockable: ILockable
}

interface IUnlockedEvent {
	actor: maybe<IActor>, 
	createdAt: string, 
	id: string, 
	lockable: ILockable
}

interface IDeployedEvent {
	actor: maybe<IActor>, 
	createdAt: string, 
	databaseId: maybe<number>, 
	deployment: IDeployment, 
	id: string, 
	pullRequest: IPullRequest, 
	ref: maybe<IRef>
}

interface IDeployment {
	commit: maybe<ICommit>, 
	commitOid: string, 
	createdAt: string, 
	creator: maybe<IActor>, 
	databaseId: maybe<number>, 
	description: maybe<string>, 
	environment: maybe<string>, 
	id: string, 
	latestStatus: maybe<IDeploymentStatus>, 
	payload: maybe<string>, 
	ref: maybe<IRef>, 
	repository: IRepository, 
	state: maybe<DeploymentState>, 
	statuses: maybe<IDeploymentStatusConnection>, 
	task: maybe<string>, 
	updatedAt: string
}

interface IDeploymentStatus {
	createdAt: string, 
	creator: maybe<IActor>, 
	deployment: IDeployment, 
	description: maybe<string>, 
	environmentUrl: maybe<string>, 
	id: string, 
	logUrl: maybe<string>, 
	state: DeploymentStatusState, 
	updatedAt: string
}

interface IDeploymentStatusConnection {
	edges: maybe<IDeploymentStatusEdge>, 
	nodes: maybe<IDeploymentStatus>, 
	pageInfo: IPageInfo, 
	totalCount: number
}

interface IDeploymentStatusEdge {
	cursor: string, 
	node: maybe<IDeploymentStatus>
}

interface IDeploymentEnvironmentChangedEvent {
	actor: maybe<IActor>, 
	createdAt: string, 
	deploymentStatus: IDeploymentStatus, 
	id: string, 
	pullRequest: IPullRequest
}

interface IHeadRefDeletedEvent {
	actor: maybe<IActor>, 
	createdAt: string, 
	headRef: maybe<IRef>, 
	headRefName: string, 
	id: string, 
	pullRequest: IPullRequest
}

interface IHeadRefRestoredEvent {
	actor: maybe<IActor>, 
	createdAt: string, 
	id: string, 
	pullRequest: IPullRequest
}

interface IHeadRefForcePushedEvent {
	actor: maybe<IActor>, 
	afterCommit: maybe<ICommit>, 
	beforeCommit: maybe<ICommit>, 
	createdAt: string, 
	id: string, 
	pullRequest: IPullRequest, 
	ref: maybe<IRef>
}

interface IBaseRefForcePushedEvent {
	actor: maybe<IActor>, 
	afterCommit: maybe<ICommit>, 
	beforeCommit: maybe<ICommit>, 
	createdAt: string, 
	id: string, 
	pullRequest: IPullRequest, 
	ref: maybe<IRef>
}

interface IReviewRequestedEvent {
	actor: maybe<IActor>, 
	createdAt: string, 
	id: string, 
	pullRequest: IPullRequest, 
	requestedReviewer: maybe<RequestedReviewer>
}

interface IReviewRequestRemovedEvent {
	actor: maybe<IActor>, 
	createdAt: string, 
	id: string, 
	pullRequest: IPullRequest, 
	requestedReviewer: maybe<RequestedReviewer>
}

interface IReviewDismissedEvent {
	actor: maybe<IActor>, 
	createdAt: string, 
	databaseId: maybe<number>, 
	id: string, 
	message: string, 
	messageHtml: string, 
	previousReviewState: PullRequestReviewState, 
	pullRequest: IPullRequest, 
	pullRequestCommit: maybe<IPullRequestCommit>, 
	resourcePath: string, 
	review: maybe<IPullRequestReview>, 
	url: string
}

interface IRefConnection {
	edges: maybe<IRefEdge>, 
	nodes: maybe<IRef>, 
	pageInfo: IPageInfo, 
	totalCount: number
}

interface IRefEdge {
	cursor: string, 
	node: maybe<IRef>
}

interface IPushAllowanceConnection {
	edges: maybe<IPushAllowanceEdge>, 
	nodes: maybe<IPushAllowance>, 
	pageInfo: IPageInfo, 
	totalCount: number
}

interface IPushAllowanceEdge {
	cursor: string, 
	node: maybe<IPushAllowance>
}

interface IPushAllowance {
	actor: maybe<PushAllowanceActor>, 
	branchProtectionRule: maybe<IBranchProtectionRule>, 
	id: string
}

interface IReviewDismissalAllowanceConnection {
	edges: maybe<IReviewDismissalAllowanceEdge>, 
	nodes: maybe<IReviewDismissalAllowance>, 
	pageInfo: IPageInfo, 
	totalCount: number
}

interface IReviewDismissalAllowanceEdge {
	cursor: string, 
	node: maybe<IReviewDismissalAllowance>
}

interface IReviewDismissalAllowance {
	actor: maybe<ReviewDismissalAllowanceActor>, 
	branchProtectionRule: maybe<IBranchProtectionRule>, 
	id: string
}

interface IRepositoryCollaboratorConnection {
	edges: maybe<IRepositoryCollaboratorEdge>, 
	nodes: maybe<IUser>, 
	pageInfo: IPageInfo, 
	totalCount: number
}

interface IRepositoryCollaboratorEdge {
	cursor: string, 
	node: IUser, 
	permission: RepositoryPermission
}

interface IDeployKeyConnection {
	edges: maybe<IDeployKeyEdge>, 
	nodes: maybe<IDeployKey>, 
	pageInfo: IPageInfo, 
	totalCount: number
}

interface IDeployKeyEdge {
	cursor: string, 
	node: maybe<IDeployKey>
}

interface IDeployKey {
	createdAt: string, 
	id: string, 
	key: string, 
	readOnly: boolean, 
	title: string, 
	verified: boolean
}

interface IDeploymentConnection {
	edges: maybe<IDeploymentEdge>, 
	nodes: maybe<IDeployment>, 
	pageInfo: IPageInfo, 
	totalCount: number
}

interface IDeploymentEdge {
	cursor: string, 
	node: maybe<IDeployment>
}

interface ILanguageConnection {
	edges: maybe<ILanguageEdge>, 
	nodes: maybe<ILanguage>, 
	pageInfo: IPageInfo, 
	totalCount: number, 
	totalSize: number
}

interface ILanguageEdge {
	cursor: string, 
	node: ILanguage, 
	size: number
}

interface ILanguage {
	color: maybe<string>, 
	id: string, 
	name: string
}

interface IMilestoneConnection {
	edges: maybe<IMilestoneEdge>, 
	nodes: maybe<IMilestone>, 
	pageInfo: IPageInfo, 
	totalCount: number
}

interface IMilestoneEdge {
	cursor: string, 
	node: maybe<IMilestone>
}

interface IProjectConnection {
	edges: maybe<IProjectEdge>, 
	nodes: maybe<IProject>, 
	pageInfo: IPageInfo, 
	totalCount: number
}

interface IProjectEdge {
	cursor: string, 
	node: maybe<IProject>
}

interface IProtectedBranchConnection {
	edges: maybe<IProtectedBranchEdge>, 
	nodes: maybe<IProtectedBranch>, 
	pageInfo: IPageInfo, 
	totalCount: number
}

interface IProtectedBranchEdge {
	cursor: string, 
	node: maybe<IProtectedBranch>
}

interface IProtectedBranch {
	creator: maybe<IActor>, 
	hasDismissableStaleReviews: boolean, 
	hasRequiredReviews: boolean, 
	hasRequiredStatusChecks: boolean, 
	hasRestrictedPushes: boolean, 
	hasRestrictedReviewDismissals: boolean, 
	hasStrictRequiredStatusChecks: boolean, 
	id: string, 
	isAdminEnforced: boolean, 
	name: string, 
	pushAllowances: IPushAllowanceConnection, 
	repository: IRepository, 
	requiredStatusCheckContexts: maybe<string>, 
	reviewDismissalAllowances: IReviewDismissalAllowanceConnection
}

interface IRelease {
	author: maybe<IUser>, 
	createdAt: string, 
	description: maybe<string>, 
	id: string, 
	isDraft: boolean, 
	isPrerelease: boolean, 
	name: maybe<string>, 
	publishedAt: maybe<string>, 
	releaseAssets: IReleaseAssetConnection, 
	resourcePath: string, 
	tag: maybe<IRef>, 
	tagName: string, 
	updatedAt: string, 
	url: string
}

interface IReleaseAssetConnection {
	edges: maybe<IReleaseAssetEdge>, 
	nodes: maybe<IReleaseAsset>, 
	pageInfo: IPageInfo, 
	totalCount: number
}

interface IReleaseAssetEdge {
	cursor: string, 
	node: maybe<IReleaseAsset>
}

interface IReleaseAsset {
	contentType: string, 
	createdAt: string, 
	downloadCount: number, 
	downloadUrl: string, 
	id: string, 
	name: string, 
	release: maybe<IRelease>, 
	size: number, 
	updatedAt: string, 
	uploadedBy: IUser, 
	url: string
}

interface IReleaseConnection {
	edges: maybe<IReleaseEdge>, 
	nodes: maybe<IRelease>, 
	pageInfo: IPageInfo, 
	totalCount: number
}

interface IReleaseEdge {
	cursor: string, 
	node: maybe<IRelease>
}

interface IRepositoryTopicConnection {
	edges: maybe<IRepositoryTopicEdge>, 
	nodes: maybe<IRepositoryTopic>, 
	pageInfo: IPageInfo, 
	totalCount: number
}

interface IRepositoryTopicEdge {
	cursor: string, 
	node: maybe<IRepositoryTopic>
}

interface IRepositoryTopic {
	id: string, 
	resourcePath: string, 
	topic: ITopic, 
	url: string
}

interface ITopic {
	id: string, 
	name: string, 
	relatedTopics: ITopic, 
	stargazers: IStargazerConnection, 
	viewerHasStarred: boolean
}

interface IContributionsCollection {
	contributionCalendar: IContributionCalendar, 
	doesEndInCurrentMonth: boolean, 
	earliestRestrictedContributionDate: maybe<any>, 
	endedAt: string, 
	firstIssueContribution: maybe<CreatedIssueOrRestrictedContribution>, 
	firstPullRequestContribution: maybe<CreatedPullRequestOrRestrictedContribution>, 
	hasActivityInThePast: boolean, 
	hasAnyContributions: boolean, 
	hasAnyRestrictedContributions: boolean, 
	isSingleDay: boolean, 
	issueContributions: ICreatedIssueContributionConnection, 
	joinedGitHubContribution: maybe<IJoinedGitHubContribution>, 
	latestRestrictedContributionDate: maybe<any>, 
	mostRecentCollectionWithActivity: maybe<IContributionsCollection>, 
	mostRecentCollectionWithoutActivity: maybe<IContributionsCollection>, 
	popularIssueContribution: maybe<ICreatedIssueContribution>, 
	popularPullRequestContribution: maybe<ICreatedPullRequestContribution>, 
	restrictedContributionsCount: number, 
	startedAt: string, 
	totalCommitContributions: number, 
	totalIssueContributions: number, 
	totalPullRequestContributions: number, 
	totalPullRequestReviewContributions: number, 
	totalRepositoriesWithContributedCommits: number, 
	totalRepositoriesWithContributedIssues: number, 
	totalRepositoriesWithContributedPullRequestReviews: number, 
	totalRepositoriesWithContributedPullRequests: number, 
	totalRepositoryContributions: number, 
	user: IUser
}

interface IContributionCalendar {
	colors: string, 
	isHalloween: boolean, 
	months: IContributionCalendarMonth, 
	totalContributions: number, 
	weeks: IContributionCalendarWeek
}

interface IContributionCalendarMonth {
	firstDay: any, 
	name: string, 
	totalWeeks: number, 
	year: number
}

interface IContributionCalendarWeek {
	contributionDays: IContributionCalendarDay, 
	firstDay: any
}

interface IContributionCalendarDay {
	color: string, 
	contributionCount: number, 
	date: any, 
	weekday: number
}

interface ICreatedIssueContribution {
	isRestricted: boolean, 
	issue: IIssue, 
	occurredAt: string, 
	resourcePath: string, 
	url: string, 
	user: IUser
}

interface IRestrictedContribution {
	isRestricted: boolean, 
	occurredAt: string, 
	resourcePath: string, 
	url: string, 
	user: IUser
}

interface ICreatedPullRequestContribution {
	isRestricted: boolean, 
	occurredAt: string, 
	pullRequest: IPullRequest, 
	resourcePath: string, 
	url: string, 
	user: IUser
}

interface ICreatedIssueContributionConnection {
	edges: maybe<ICreatedIssueContributionEdge>, 
	nodes: maybe<ICreatedIssueContribution>, 
	pageInfo: IPageInfo, 
	totalCount: number
}

interface ICreatedIssueContributionEdge {
	cursor: string, 
	node: maybe<ICreatedIssueContribution>
}

interface IJoinedGitHubContribution {
	isRestricted: boolean, 
	occurredAt: string, 
	resourcePath: string, 
	url: string, 
	user: IUser
}

interface IFollowerConnection {
	edges: maybe<IUserEdge>, 
	nodes: maybe<IUser>, 
	pageInfo: IPageInfo, 
	totalCount: number
}

interface IFollowingConnection {
	edges: maybe<IUserEdge>, 
	nodes: maybe<IUser>, 
	pageInfo: IPageInfo, 
	totalCount: number
}

interface IGist {
	comments: IGistCommentConnection, 
	createdAt: string, 
	description: maybe<string>, 
	id: string, 
	isPublic: boolean, 
	name: string, 
	owner: maybe<IRepositoryOwner>, 
	pushedAt: maybe<string>, 
	stargazers: IStargazerConnection, 
	updatedAt: string, 
	viewerHasStarred: boolean
}

interface IGistCommentConnection {
	edges: maybe<IGistCommentEdge>, 
	nodes: maybe<IGistComment>, 
	pageInfo: IPageInfo, 
	totalCount: number
}

interface IGistCommentEdge {
	cursor: string, 
	node: maybe<IGistComment>
}

interface IGistComment {
	author: maybe<IActor>, 
	authorAssociation: CommentAuthorAssociation, 
	body: string, 
	bodyHTML: string, 
	bodyText: string, 
	createdAt: string, 
	createdViaEmail: boolean, 
	databaseId: maybe<number>, 
	editor: maybe<IActor>, 
	gist: IGist, 
	id: string, 
	includesCreatedEdit: boolean, 
	isMinimized: boolean, 
	lastEditedAt: maybe<string>, 
	minimizedReason: maybe<string>, 
	publishedAt: maybe<string>, 
	updatedAt: string, 
	userContentEdits: maybe<IUserContentEditConnection>, 
	viewerCanDelete: boolean, 
	viewerCanMinimize: boolean, 
	viewerCanUpdate: boolean, 
	viewerCannotUpdateReasons: CommentCannotUpdateReason, 
	viewerDidAuthor: boolean
}

interface IGistConnection {
	edges: maybe<IGistEdge>, 
	nodes: maybe<IGist>, 
	pageInfo: IPageInfo, 
	totalCount: number
}

interface IGistEdge {
	cursor: string, 
	node: maybe<IGist>
}

interface IOrganizationConnection {
	edges: maybe<IOrganizationEdge>, 
	nodes: maybe<IOrganization>, 
	pageInfo: IPageInfo, 
	totalCount: number
}

interface IOrganizationEdge {
	cursor: string, 
	node: maybe<IOrganization>
}

interface IPublicKeyConnection {
	edges: maybe<IPublicKeyEdge>, 
	nodes: maybe<IPublicKey>, 
	pageInfo: IPageInfo, 
	totalCount: number
}

interface IPublicKeyEdge {
	cursor: string, 
	node: maybe<IPublicKey>
}

interface IPublicKey {
	id: string, 
	key: string
}

interface IStarredRepositoryConnection {
	edges: maybe<IStarredRepositoryEdge>, 
	nodes: maybe<IRepository>, 
	pageInfo: IPageInfo, 
	totalCount: number
}

interface IStarredRepositoryEdge {
	cursor: string, 
	node: IRepository, 
	starredAt: string
}

interface IIssueTimelineConnection {
	edges: maybe<IIssueTimelineItemEdge>, 
	nodes: maybe<IssueTimelineItem>, 
	pageInfo: IPageInfo, 
	totalCount: number
}

interface IIssueTimelineItemEdge {
	cursor: string, 
	node: maybe<IssueTimelineItem>
}

interface ITransferredEvent {
	actor: maybe<IActor>, 
	createdAt: string, 
	fromRepository: maybe<IRepository>, 
	id: string, 
	issue: IIssue
}

interface IOrganizationMemberConnection {
	edges: maybe<IOrganizationMemberEdge>, 
	nodes: maybe<IUser>, 
	pageInfo: IPageInfo, 
	totalCount: number
}

interface IOrganizationMemberEdge {
	cursor: string, 
	node: maybe<IUser>, 
	role: maybe<OrganizationMemberRole>
}

interface IOrganizationIdentityProvider {
	digestMethod: maybe<string>, 
	externalIdentities: IExternalIdentityConnection, 
	id: string, 
	idpCertificate: maybe<any>, 
	issuer: maybe<string>, 
	organization: maybe<IOrganization>, 
	signatureMethod: maybe<string>, 
	ssoUrl: maybe<string>
}

interface IExternalIdentityConnection {
	edges: maybe<IExternalIdentityEdge>, 
	nodes: maybe<IExternalIdentity>, 
	pageInfo: IPageInfo, 
	totalCount: number
}

interface IExternalIdentityEdge {
	cursor: string, 
	node: maybe<IExternalIdentity>
}

interface IExternalIdentity {
	guid: string, 
	id: string, 
	organizationInvitation: maybe<IOrganizationInvitation>, 
	samlIdentity: maybe<IExternalIdentitySamlAttributes>, 
	scimIdentity: maybe<IExternalIdentityScimAttributes>, 
	user: maybe<IUser>
}

interface IExternalIdentitySamlAttributes {
	nameId: maybe<string>
}

interface IExternalIdentityScimAttributes {
	username: maybe<string>
}

interface IRateLimit {
	cost: number, 
	limit: number, 
	nodeCount: number, 
	remaining: number, 
	resetAt: string
}

interface ISearchResultItemConnection {
	codeCount: number, 
	edges: maybe<ISearchResultItemEdge>, 
	issueCount: number, 
	nodes: maybe<SearchResultItem>, 
	pageInfo: IPageInfo, 
	repositoryCount: number, 
	userCount: number, 
	wikiCount: number
}

interface ISearchResultItemEdge {
	cursor: string, 
	node: maybe<SearchResultItem>, 
	textMatches: maybe<ITextMatch>
}

interface ITextMatch {
	fragment: string, 
	highlights: ITextMatchHighlight, 
	property: string
}

interface ITextMatchHighlight {
	beginIndice: number, 
	endIndice: number, 
	text: string
}

interface ISecurityAdvisoryConnection {
	edges: maybe<ISecurityAdvisoryEdge>, 
	nodes: maybe<ISecurityAdvisory>, 
	pageInfo: IPageInfo, 
	totalCount: number
}

interface ISecurityAdvisoryEdge {
	cursor: string, 
	node: maybe<ISecurityAdvisory>
}

interface ISecurityAdvisory {
	databaseId: maybe<number>, 
	description: string, 
	ghsaId: string, 
	id: string, 
	identifiers: ISecurityAdvisoryIdentifier, 
	publishedAt: string, 
	references: ISecurityAdvisoryReference, 
	severity: SecurityAdvisorySeverity, 
	summary: string, 
	updatedAt: string, 
	vulnerabilities: ISecurityVulnerabilityConnection, 
	withdrawnAt: maybe<string>
}

interface ISecurityAdvisoryIdentifier {
	type: string, 
	value: string
}

interface ISecurityAdvisoryReference {
	url: string
}

interface ISecurityVulnerabilityConnection {
	edges: maybe<ISecurityVulnerabilityEdge>, 
	nodes: maybe<ISecurityVulnerability>, 
	pageInfo: IPageInfo, 
	totalCount: number
}

interface ISecurityVulnerabilityEdge {
	cursor: string, 
	node: maybe<ISecurityVulnerability>
}

interface ISecurityVulnerability {
	advisory: ISecurityAdvisory, 
	firstPatchedVersion: maybe<ISecurityAdvisoryPackageVersion>, 
	package: ISecurityAdvisoryPackage, 
	severity: SecurityAdvisorySeverity, 
	updatedAt: string, 
	vulnerableVersionRange: string
}

interface ISecurityAdvisoryPackageVersion {
	identifier: string
}

interface ISecurityAdvisoryPackage {
	ecosystem: SecurityAdvisoryEcosystem, 
	name: string
}

interface IMutation {
	acceptTopicSuggestion: maybe<IAcceptTopicSuggestionPayload>, 
	addComment: maybe<IAddCommentPayload>, 
	addProjectCard: maybe<IAddProjectCardPayload>, 
	addProjectColumn: maybe<IAddProjectColumnPayload>, 
	addPullRequestReview: maybe<IAddPullRequestReviewPayload>, 
	addPullRequestReviewComment: maybe<IAddPullRequestReviewCommentPayload>, 
	addReaction: maybe<IAddReactionPayload>, 
	addStar: maybe<IAddStarPayload>, 
	createBranchProtectionRule: maybe<ICreateBranchProtectionRulePayload>, 
	createProject: maybe<ICreateProjectPayload>, 
	declineTopicSuggestion: maybe<IDeclineTopicSuggestionPayload>, 
	deleteBranchProtectionRule: maybe<IDeleteBranchProtectionRulePayload>, 
	deleteProject: maybe<IDeleteProjectPayload>, 
	deleteProjectCard: maybe<IDeleteProjectCardPayload>, 
	deleteProjectColumn: maybe<IDeleteProjectColumnPayload>, 
	deletePullRequestReview: maybe<IDeletePullRequestReviewPayload>, 
	dismissPullRequestReview: maybe<IDismissPullRequestReviewPayload>, 
	lockLockable: maybe<ILockLockablePayload>, 
	moveProjectCard: maybe<IMoveProjectCardPayload>, 
	moveProjectColumn: maybe<IMoveProjectColumnPayload>, 
	removeOutsideCollaborator: maybe<IRemoveOutsideCollaboratorPayload>, 
	removeReaction: maybe<IRemoveReactionPayload>, 
	removeStar: maybe<IRemoveStarPayload>, 
	requestReviews: maybe<IRequestReviewsPayload>, 
	submitPullRequestReview: maybe<ISubmitPullRequestReviewPayload>, 
	unlockLockable: maybe<IUnlockLockablePayload>, 
	updateBranchProtectionRule: maybe<IUpdateBranchProtectionRulePayload>, 
	updateProject: maybe<IUpdateProjectPayload>, 
	updateProjectCard: maybe<IUpdateProjectCardPayload>, 
	updateProjectColumn: maybe<IUpdateProjectColumnPayload>, 
	updatePullRequestReview: maybe<IUpdatePullRequestReviewPayload>, 
	updatePullRequestReviewComment: maybe<IUpdatePullRequestReviewCommentPayload>, 
	updateSubscription: maybe<IUpdateSubscriptionPayload>, 
	updateTopics: maybe<IUpdateTopicsPayload>
}

interface IAcceptTopicSuggestionPayload {
	clientMutationId: maybe<string>, 
	topic: maybe<ITopic>
}

interface IAddCommentPayload {
	clientMutationId: maybe<string>, 
	commentEdge: maybe<IIssueCommentEdge>, 
	subject: maybe<INode>, 
	timelineEdge: maybe<IIssueTimelineItemEdge>
}

interface IAddProjectCardPayload {
	cardEdge: maybe<IProjectCardEdge>, 
	clientMutationId: maybe<string>, 
	projectColumn: maybe<IProjectColumn>
}

interface IAddProjectColumnPayload {
	clientMutationId: maybe<string>, 
	columnEdge: maybe<IProjectColumnEdge>, 
	project: maybe<IProject>
}

interface IAddPullRequestReviewPayload {
	clientMutationId: maybe<string>, 
	pullRequestReview: maybe<IPullRequestReview>, 
	reviewEdge: maybe<IPullRequestReviewEdge>
}

interface IAddPullRequestReviewCommentPayload {
	clientMutationId: maybe<string>, 
	comment: maybe<IPullRequestReviewComment>, 
	commentEdge: maybe<IPullRequestReviewCommentEdge>
}

interface IAddReactionPayload {
	clientMutationId: maybe<string>, 
	reaction: maybe<IReaction>, 
	subject: maybe<IReactable>
}

interface IAddStarPayload {
	clientMutationId: maybe<string>, 
	starrable: maybe<IStarrable>
}

interface ICreateBranchProtectionRulePayload {
	branchProtectionRule: maybe<IBranchProtectionRule>, 
	clientMutationId: maybe<string>
}

interface ICreateProjectPayload {
	clientMutationId: maybe<string>, 
	project: maybe<IProject>
}

interface IDeclineTopicSuggestionPayload {
	clientMutationId: maybe<string>, 
	topic: maybe<ITopic>
}

interface IDeleteBranchProtectionRulePayload {
	clientMutationId: maybe<string>
}

interface IDeleteProjectPayload {
	clientMutationId: maybe<string>, 
	owner: maybe<IProjectOwner>
}

interface IDeleteProjectCardPayload {
	clientMutationId: maybe<string>, 
	column: maybe<IProjectColumn>, 
	deletedCardId: maybe<string>
}

interface IDeleteProjectColumnPayload {
	clientMutationId: maybe<string>, 
	deletedColumnId: maybe<string>, 
	project: maybe<IProject>
}

interface IDeletePullRequestReviewPayload {
	clientMutationId: maybe<string>, 
	pullRequestReview: maybe<IPullRequestReview>
}

interface IDismissPullRequestReviewPayload {
	clientMutationId: maybe<string>, 
	pullRequestReview: maybe<IPullRequestReview>
}

interface ILockLockablePayload {
	clientMutationId: maybe<string>, 
	lockedRecord: maybe<ILockable>
}

interface IMoveProjectCardPayload {
	cardEdge: maybe<IProjectCardEdge>, 
	clientMutationId: maybe<string>
}

interface IMoveProjectColumnPayload {
	clientMutationId: maybe<string>, 
	columnEdge: maybe<IProjectColumnEdge>
}

interface IRemoveOutsideCollaboratorPayload {
	clientMutationId: maybe<string>, 
	removedUser: maybe<IUser>
}

interface IRemoveReactionPayload {
	clientMutationId: maybe<string>, 
	reaction: maybe<IReaction>, 
	subject: maybe<IReactable>
}

interface IRemoveStarPayload {
	clientMutationId: maybe<string>, 
	starrable: maybe<IStarrable>
}

interface IRequestReviewsPayload {
	clientMutationId: maybe<string>, 
	pullRequest: maybe<IPullRequest>, 
	requestedReviewersEdge: maybe<IUserEdge>
}

interface ISubmitPullRequestReviewPayload {
	clientMutationId: maybe<string>, 
	pullRequestReview: maybe<IPullRequestReview>
}

interface IUnlockLockablePayload {
	clientMutationId: maybe<string>, 
	unlockedRecord: maybe<ILockable>
}

interface IUpdateBranchProtectionRulePayload {
	branchProtectionRule: maybe<IBranchProtectionRule>, 
	clientMutationId: maybe<string>
}

interface IUpdateProjectPayload {
	clientMutationId: maybe<string>, 
	project: maybe<IProject>
}

interface IUpdateProjectCardPayload {
	clientMutationId: maybe<string>, 
	projectCard: maybe<IProjectCard>
}

interface IUpdateProjectColumnPayload {
	clientMutationId: maybe<string>, 
	projectColumn: maybe<IProjectColumn>
}

interface IUpdatePullRequestReviewPayload {
	clientMutationId: maybe<string>, 
	pullRequestReview: maybe<IPullRequestReview>
}

interface IUpdatePullRequestReviewCommentPayload {
	clientMutationId: maybe<string>, 
	pullRequestReviewComment: maybe<IPullRequestReviewComment>
}

interface IUpdateSubscriptionPayload {
	clientMutationId: maybe<string>, 
	subscribable: maybe<ISubscribable>
}

interface IUpdateTopicsPayload {
	clientMutationId: maybe<string>, 
	invalidTopicNames: maybe<string>, 
	repository: maybe<IRepository>
}

interface IRepositoryInvitationEdge {
	cursor: string, 
	node: maybe<IRepositoryInvitation>
}

interface IRepositoryInvitation {
	id: string, 
	invitee: IUser, 
	inviter: IUser, 
	permission: RepositoryPermission, 
	repository: maybe<IRepositoryInfo>
}

interface IBot {
	avatarUrl: string, 
	createdAt: string, 
	databaseId: maybe<number>, 
	id: string, 
	login: string, 
	resourcePath: string, 
	updatedAt: string, 
	url: string
}

interface IBlob {
	abbreviatedOid: string, 
	byteSize: number, 
	commitResourcePath: string, 
	commitUrl: string, 
	id: string, 
	isBinary: boolean, 
	isTruncated: boolean, 
	oid: any, 
	repository: IRepository, 
	text: maybe<string>
}

interface IPullRequestTimelineItemsEdge {
	cursor: string, 
	node: maybe<PullRequestTimelineItems>
}

interface IBaseRefChangedEvent {
	actor: maybe<IActor>, 
	createdAt: string, 
	databaseId: maybe<number>, 
	id: string
}

interface IAddedToProjectEvent {
	actor: maybe<IActor>, 
	createdAt: string, 
	databaseId: maybe<number>, 
	id: string
}

interface ICommentDeletedEvent {
	actor: maybe<IActor>, 
	createdAt: string, 
	databaseId: maybe<number>, 
	id: string
}

interface IConvertedNoteToIssueEvent {
	actor: maybe<IActor>, 
	createdAt: string, 
	databaseId: maybe<number>, 
	id: string
}

interface IMentionedEvent {
	actor: maybe<IActor>, 
	createdAt: string, 
	databaseId: maybe<number>, 
	id: string
}

interface IMovedColumnsInProjectEvent {
	actor: maybe<IActor>, 
	createdAt: string, 
	databaseId: maybe<number>, 
	id: string
}

interface IPinnedEvent {
	actor: maybe<IActor>, 
	createdAt: string, 
	id: string, 
	issue: IIssue
}

interface IRemovedFromProjectEvent {
	actor: maybe<IActor>, 
	createdAt: string, 
	databaseId: maybe<number>, 
	id: string
}

interface IUnpinnedEvent {
	actor: maybe<IActor>, 
	createdAt: string, 
	id: string, 
	issue: IIssue
}

interface IIssueTimelineItemsEdge {
	cursor: string, 
	node: maybe<IssueTimelineItems>
}

interface ITopicConnection {
	edges: maybe<ITopicEdge>, 
	nodes: maybe<ITopic>, 
	pageInfo: IPageInfo, 
	totalCount: number
}

interface ITopicEdge {
	cursor: string, 
	node: maybe<ITopic>
}

interface ICreatedPullRequestContributionConnection {
	edges: maybe<ICreatedPullRequestContributionEdge>, 
	nodes: maybe<ICreatedPullRequestContribution>, 
	pageInfo: IPageInfo, 
	totalCount: number
}

interface ICreatedPullRequestContributionEdge {
	cursor: string, 
	node: maybe<ICreatedPullRequestContribution>
}

interface IAppEdge {
	cursor: string, 
	node: maybe<IApp>
}

interface IContentAttachment {
	body: string, 
	contentReference: IContentReference, 
	databaseId: number, 
	id: string, 
	title: string
}

interface IContentReference {
	databaseId: number, 
	id: string, 
	reference: string
}

interface IGpgSignature {
	email: string, 
	isValid: boolean, 
	keyId: maybe<string>, 
	payload: string, 
	signature: string, 
	signer: maybe<IUser>, 
	state: GitSignatureState, 
	wasSignedByGitHub: boolean
}

interface ISmimeSignature {
	email: string, 
	isValid: boolean, 
	payload: string, 
	signature: string, 
	signer: maybe<IUser>, 
	state: GitSignatureState, 
	wasSignedByGitHub: boolean
}

interface ITag {
	abbreviatedOid: string, 
	commitResourcePath: string, 
	commitUrl: string, 
	id: string, 
	message: maybe<string>, 
	name: string, 
	oid: any, 
	repository: IRepository, 
	tagger: maybe<IGitActor>, 
	target: IGitObject
}

interface IUnknownSignature {
	email: string, 
	isValid: boolean, 
	payload: string, 
	signature: string, 
	signer: maybe<IUser>, 
	state: GitSignatureState, 
	wasSignedByGitHub: boolean
}
// UNION TYPES 
type ProjectCardItem = IIssue | IPullRequest

type RequestedReviewer = IUser | ITeam

type PullRequestTimelineItem = ICommit | ICommitCommentThread | IPullRequestReview | IPullRequestReviewThread | IPullRequestReviewComment | IIssueComment | IClosedEvent | IReopenedEvent | ISubscribedEvent | IUnsubscribedEvent | IMergedEvent | IReferencedEvent | ICrossReferencedEvent | IAssignedEvent | IUnassignedEvent | ILabeledEvent | IUnlabeledEvent | IMilestonedEvent | IDemilestonedEvent | IRenamedTitleEvent | ILockedEvent | IUnlockedEvent | IDeployedEvent | IDeploymentEnvironmentChangedEvent | IHeadRefDeletedEvent | IHeadRefRestoredEvent | IHeadRefForcePushedEvent | IBaseRefForcePushedEvent | IReviewRequestedEvent | IReviewRequestRemovedEvent | IReviewDismissedEvent

type Closer = ICommit | IPullRequest

type ReferencedSubject = IIssue | IPullRequest

type MilestoneItem = IIssue | IPullRequest

type RenamedTitleSubject = IIssue | IPullRequest

type PushAllowanceActor = IUser | ITeam

type ReviewDismissalAllowanceActor = IUser | ITeam

type IssueOrPullRequest = IIssue | IPullRequest

type CreatedIssueOrRestrictedContribution = ICreatedIssueContribution | IRestrictedContribution

type CreatedPullRequestOrRestrictedContribution = ICreatedPullRequestContribution | IRestrictedContribution

type IssueTimelineItem = ICommit | IIssueComment | ICrossReferencedEvent | IClosedEvent | IReopenedEvent | ISubscribedEvent | IUnsubscribedEvent | IReferencedEvent | IAssignedEvent | IUnassignedEvent | ILabeledEvent | IUnlabeledEvent | IMilestonedEvent | IDemilestonedEvent | IRenamedTitleEvent | ILockedEvent | IUnlockedEvent | ITransferredEvent

type SearchResultItem = IIssue | IPullRequest | IRepository | IUser | IOrganization | IMarketplaceListing

type PullRequestTimelineItems = IPullRequestCommit | IPullRequestReview | IPullRequestReviewThread | IBaseRefChangedEvent | IBaseRefForcePushedEvent | IDeployedEvent | IDeploymentEnvironmentChangedEvent | IHeadRefDeletedEvent | IHeadRefForcePushedEvent | IHeadRefRestoredEvent | IMergedEvent | IReviewDismissedEvent | IReviewRequestedEvent | IReviewRequestRemovedEvent | IIssueComment | ICrossReferencedEvent | IAddedToProjectEvent | IAssignedEvent | IClosedEvent | ICommentDeletedEvent | IConvertedNoteToIssueEvent | IDemilestonedEvent | ILabeledEvent | ILockedEvent | IMentionedEvent | IMilestonedEvent | IMovedColumnsInProjectEvent | IPinnedEvent | IReferencedEvent | IRemovedFromProjectEvent | IRenamedTitleEvent | IReopenedEvent | ISubscribedEvent | ITransferredEvent | IUnassignedEvent | IUnlabeledEvent | IUnlockedEvent | IUnpinnedEvent | IUnsubscribedEvent

type IssueTimelineItems = IIssueComment | ICrossReferencedEvent | IAddedToProjectEvent | IAssignedEvent | IClosedEvent | ICommentDeletedEvent | IConvertedNoteToIssueEvent | IDemilestonedEvent | ILabeledEvent | ILockedEvent | IMentionedEvent | IMilestonedEvent | IMovedColumnsInProjectEvent | IPinnedEvent | IReferencedEvent | IRemovedFromProjectEvent | IRenamedTitleEvent | IReopenedEvent | ISubscribedEvent | ITransferredEvent | IUnassignedEvent | IUnlabeledEvent | IUnlockedEvent | IUnpinnedEvent | IUnsubscribedEvent

type CollectionItemContent = IRepository | IOrganization | IUser
// INPUT TYPES 
interface IRepositoryOrder {
	field: RepositoryOrderField, 
	direction: OrderDirection
}

interface IStarOrder {
	field: StarOrderField, 
	direction: OrderDirection
}

interface IIssueOrder {
	field: IssueOrderField, 
	direction: OrderDirection
}

interface IReactionOrder {
	field: ReactionOrderField, 
	direction: OrderDirection
}

interface ICommitAuthor {
	id: maybe<string>, 
	emails: maybe<string>
}

interface ITeamOrder {
	field: TeamOrderField, 
	direction: OrderDirection
}

interface ITeamMemberOrder {
	field: TeamMemberOrderField, 
	direction: OrderDirection
}

interface ITeamRepositoryOrder {
	field: TeamRepositoryOrderField, 
	direction: OrderDirection
}

interface ILanguageOrder {
	field: LanguageOrderField, 
	direction: OrderDirection
}

interface IMilestoneOrder {
	field: MilestoneOrderField, 
	direction: OrderDirection
}

interface IProjectOrder {
	field: ProjectOrderField, 
	direction: OrderDirection
}

interface IRefOrder {
	field: RefOrderField, 
	direction: OrderDirection
}

interface IReleaseOrder {
	field: ReleaseOrderField, 
	direction: OrderDirection
}

interface IGistOrder {
	field: GistOrderField, 
	direction: OrderDirection
}

interface ISecurityAdvisoryOrder {
	field: SecurityAdvisoryOrderField, 
	direction: OrderDirection
}

interface ISecurityAdvisoryIdentifierFilter {
	type: SecurityAdvisoryIdentifierType, 
	value: string
}

interface ISecurityVulnerabilityOrder {
	field: SecurityVulnerabilityOrderField, 
	direction: OrderDirection
}

interface IAcceptTopicSuggestionInput {
	repositoryId: string, 
	name: string, 
	clientMutationId: maybe<string>
}

interface IAddCommentInput {
	subjectId: string, 
	body: string, 
	clientMutationId: maybe<string>
}

interface IAddProjectCardInput {
	projectColumnId: string, 
	contentId: maybe<string>, 
	note: maybe<string>, 
	clientMutationId: maybe<string>
}

interface IAddProjectColumnInput {
	projectId: string, 
	name: string, 
	clientMutationId: maybe<string>
}

interface IAddPullRequestReviewInput {
	pullRequestId: string, 
	commitOID: maybe<any>, 
	body: maybe<string>, 
	event: maybe<PullRequestReviewEvent>, 
	comments: maybe<IDraftPullRequestReviewComment>, 
	clientMutationId: maybe<string>
}

interface IDraftPullRequestReviewComment {
	path: string, 
	position: number, 
	body: string
}

interface IAddPullRequestReviewCommentInput {
	pullRequestReviewId: string, 
	commitOID: maybe<any>, 
	body: string, 
	path: maybe<string>, 
	position: maybe<number>, 
	inReplyTo: maybe<string>, 
	clientMutationId: maybe<string>
}

interface IAddReactionInput {
	subjectId: string, 
	content: ReactionContent, 
	clientMutationId: maybe<string>
}

interface IAddStarInput {
	starrableId: string, 
	clientMutationId: maybe<string>
}

interface ICreateBranchProtectionRuleInput {
	repositoryId: string, 
	pattern: string, 
	requiresApprovingReviews: maybe<boolean>, 
	requiredApprovingReviewCount: maybe<number>, 
	requiresCommitSignatures: maybe<boolean>, 
	isAdminEnforced: maybe<boolean>, 
	requiresStatusChecks: maybe<boolean>, 
	requiresStrictStatusChecks: maybe<boolean>, 
	requiresCodeOwnerReviews: maybe<boolean>, 
	dismissesStaleReviews: maybe<boolean>, 
	restrictsReviewDismissals: maybe<boolean>, 
	reviewDismissalActorIds: maybe<string>, 
	restrictsPushes: maybe<boolean>, 
	pushActorIds: maybe<string>, 
	requiredStatusCheckContexts: maybe<string>, 
	clientMutationId: maybe<string>
}

interface ICreateProjectInput {
	ownerId: string, 
	name: string, 
	body: maybe<string>, 
	clientMutationId: maybe<string>
}

interface IDeclineTopicSuggestionInput {
	repositoryId: string, 
	name: string, 
	reason: TopicSuggestionDeclineReason, 
	clientMutationId: maybe<string>
}

interface IDeleteBranchProtectionRuleInput {
	branchProtectionRuleId: string, 
	clientMutationId: maybe<string>
}

interface IDeleteProjectInput {
	projectId: string, 
	clientMutationId: maybe<string>
}

interface IDeleteProjectCardInput {
	cardId: string, 
	clientMutationId: maybe<string>
}

interface IDeleteProjectColumnInput {
	columnId: string, 
	clientMutationId: maybe<string>
}

interface IDeletePullRequestReviewInput {
	pullRequestReviewId: string, 
	clientMutationId: maybe<string>
}

interface IDismissPullRequestReviewInput {
	pullRequestReviewId: string, 
	message: string, 
	clientMutationId: maybe<string>
}

interface ILockLockableInput {
	lockableId: string, 
	lockReason: maybe<LockReason>, 
	clientMutationId: maybe<string>
}

interface IMoveProjectCardInput {
	cardId: string, 
	columnId: string, 
	afterCardId: maybe<string>, 
	clientMutationId: maybe<string>
}

interface IMoveProjectColumnInput {
	columnId: string, 
	afterColumnId: maybe<string>, 
	clientMutationId: maybe<string>
}

interface IRemoveOutsideCollaboratorInput {
	userId: string, 
	organizationId: string, 
	clientMutationId: maybe<string>
}

interface IRemoveReactionInput {
	subjectId: string, 
	content: ReactionContent, 
	clientMutationId: maybe<string>
}

interface IRemoveStarInput {
	starrableId: string, 
	clientMutationId: maybe<string>
}

interface IRequestReviewsInput {
	pullRequestId: string, 
	userIds: maybe<string>, 
	teamIds: maybe<string>, 
	union: maybe<boolean>, 
	clientMutationId: maybe<string>
}

interface ISubmitPullRequestReviewInput {
	pullRequestReviewId: string, 
	event: PullRequestReviewEvent, 
	body: maybe<string>, 
	clientMutationId: maybe<string>
}

interface IUnlockLockableInput {
	lockableId: string, 
	clientMutationId: maybe<string>
}

interface IUpdateBranchProtectionRuleInput {
	branchProtectionRuleId: string, 
	pattern: maybe<string>, 
	requiresApprovingReviews: maybe<boolean>, 
	requiredApprovingReviewCount: maybe<number>, 
	requiresCommitSignatures: maybe<boolean>, 
	isAdminEnforced: maybe<boolean>, 
	requiresStatusChecks: maybe<boolean>, 
	requiresStrictStatusChecks: maybe<boolean>, 
	requiresCodeOwnerReviews: maybe<boolean>, 
	dismissesStaleReviews: maybe<boolean>, 
	restrictsReviewDismissals: maybe<boolean>, 
	reviewDismissalActorIds: maybe<string>, 
	restrictsPushes: maybe<boolean>, 
	pushActorIds: maybe<string>, 
	requiredStatusCheckContexts: maybe<string>, 
	clientMutationId: maybe<string>
}

interface IUpdateProjectInput {
	projectId: string, 
	name: maybe<string>, 
	body: maybe<string>, 
	state: maybe<ProjectState>, 
	public: maybe<boolean>, 
	clientMutationId: maybe<string>
}

interface IUpdateProjectCardInput {
	projectCardId: string, 
	isArchived: maybe<boolean>, 
	note: maybe<string>, 
	clientMutationId: maybe<string>
}

interface IUpdateProjectColumnInput {
	projectColumnId: string, 
	name: string, 
	clientMutationId: maybe<string>
}

interface IUpdatePullRequestReviewInput {
	pullRequestReviewId: string, 
	body: string, 
	clientMutationId: maybe<string>
}

interface IUpdatePullRequestReviewCommentInput {
	pullRequestReviewCommentId: string, 
	body: string, 
	clientMutationId: maybe<string>
}

interface IUpdateSubscriptionInput {
	subscribableId: string, 
	state: SubscriptionState, 
	clientMutationId: maybe<string>
}

interface IUpdateTopicsInput {
	repositoryId: string, 
	topicNames: string, 
	clientMutationId: maybe<string>
}

interface IPullRequestOrder {
	field: PullRequestOrderField, 
	direction: OrderDirection
}

interface IMinimizeCommentInput {
	subjectId: string, 
	classifier: ReportedContentClassifiers, 
	clientMutationId: maybe<string>
}

interface IUnminimizeCommentInput {
	subjectId: string, 
	clientMutationId: maybe<string>
}

interface IDeleteIssueInput {
	issueId: string, 
	clientMutationId: maybe<string>
}

interface IPinIssueInput {
	issueId: string, 
	clientMutationId: maybe<string>
}

interface IUnpinIssueInput {
	issueId: string, 
	clientMutationId: maybe<string>
}

interface IResolveReviewThreadInput {
	threadId: string, 
	clientMutationId: maybe<string>
}

interface IUnresolveReviewThreadInput {
	threadId: string, 
	clientMutationId: maybe<string>
}

interface ICreateContentAttachmentInput {
	contentReferenceId: string, 
	title: string, 
	body: string, 
	clientMutationId: maybe<string>
}
// ARGUMENT INTERFACES 
interface IARGActor {
	avatarUrl: {
		size: maybe<number>
	}
}

interface IARGProjectOwner {
	project: {
		number: number
	} & maybe<IARGProject>, 
	projects: {
		orderBy: maybe<IProjectOrder>, 
	search: maybe<string>, 
	states: maybe<ProjectState>, 
	after: maybe<string>, 
	before: maybe<string>, 
	first: maybe<number>, 
	last: maybe<number>
	} & IProjectConnection
}

interface IARGAssignable {
	assignees: {
		after: maybe<string>, 
	before: maybe<string>, 
	first: maybe<number>, 
	last: maybe<number>
	} & IUserConnection
}

interface IARGRepositoryOwner {
	avatarUrl: {
		size: maybe<number>
	},
pinnedRepositories: {
		privacy: maybe<RepositoryPrivacy>, 
	orderBy: maybe<IRepositoryOrder>, 
	affiliations: maybe<RepositoryAffiliation>, 
	ownerAffiliations: maybe<RepositoryAffiliation>, 
	isLocked: maybe<boolean>, 
	after: maybe<string>, 
	before: maybe<string>, 
	first: maybe<number>, 
	last: maybe<number>
	} & IRepositoryConnection, 
	repositories: {
		privacy: maybe<RepositoryPrivacy>, 
	orderBy: maybe<IRepositoryOrder>, 
	affiliations: maybe<RepositoryAffiliation>, 
	ownerAffiliations: maybe<RepositoryAffiliation>, 
	isLocked: maybe<boolean>, 
	after: maybe<string>, 
	before: maybe<string>, 
	first: maybe<number>, 
	last: maybe<number>, 
	isFork: maybe<boolean>
	} & IRepositoryConnection, 
	repository: {
		name: string
	} & maybe<IARGRepository>
}

interface IARGStarrable {
	stargazers: {
		after: maybe<string>, 
	before: maybe<string>, 
	first: maybe<number>, 
	last: maybe<number>, 
	orderBy: maybe<IStarOrder>
	} & IStargazerConnection
}

interface IARGRepositoryInfo {
	shortDescriptionHTML: {
		limit: maybe<number>
	},
licenseInfo: maybe<ILicense>, 
	owner: IRepositoryOwner
}

interface IARGComment {
	author: maybe<IActor>, 
	editor: maybe<IActor>,
userContentEdits: {
		after: maybe<string>, 
	before: maybe<string>, 
	first: maybe<number>, 
	last: maybe<number>
	} & maybe<IUserContentEditConnection>
}

interface IARGLabelable {
	labels: {
		after: maybe<string>, 
	before: maybe<string>, 
	first: maybe<number>, 
	last: maybe<number>
	} & maybe<ILabelConnection>
}

interface IARGReactable {
	reactionGroups: maybe<IReactionGroup>,
reactions: {
		after: maybe<string>, 
	before: maybe<string>, 
	first: maybe<number>, 
	last: maybe<number>, 
	content: maybe<ReactionContent>, 
	orderBy: maybe<IReactionOrder>
	} & IReactionConnection
}

interface IARGRepositoryNode {
	repository: IRepository
}

interface IARGGitObject {
	repository: IRepository
}

interface IARGGitSignature {
	signer: maybe<IUser>
}

interface IARGContribution {
	user: IUser
}

interface IARGQuery {
	codesOfConduct: maybe<ICodeOfConduct>, 
	licenses: ILicense, 
	meta: IGitHubMetadata, 
	relay: IQuery, 
	viewer: IUser,
codeOfConduct: {
		key: string
	} & maybe<ICodeOfConduct>, 
	license: {
		key: string
	} & maybe<ILicense>, 
	marketplaceCategories: {
		includeCategories: maybe<string>, 
	excludeEmpty: maybe<boolean>, 
	excludeSubcategories: maybe<boolean>
	} & IMarketplaceCategory, 
	marketplaceCategory: {
		slug: string, 
	useTopicAliases: maybe<boolean>
	} & maybe<IMarketplaceCategory>, 
	marketplaceListing: {
		slug: string
	} & maybe<IARGMarketplaceListing>, 
	marketplaceListings: {
		after: maybe<string>, 
	before: maybe<string>, 
	first: maybe<number>, 
	last: maybe<number>, 
	categorySlug: maybe<string>, 
	useTopicAliases: maybe<boolean>, 
	viewerCanAdmin: maybe<boolean>, 
	adminId: maybe<string>, 
	organizationId: maybe<string>, 
	allStates: maybe<boolean>, 
	slugs: maybe<string>, 
	primaryCategoryOnly: maybe<boolean>, 
	withFreeTrialsOnly: maybe<boolean>
	} & IMarketplaceListingConnection, 
	node: {
		id: string
	} & maybe<INode>, 
	nodes: {
		ids: string
	} & INode, 
	organization: {
		login: string
	} & maybe<IARGOrganization>, 
	rateLimit: {
		dryRun: maybe<boolean>
	} & maybe<IRateLimit>, 
	repository: {
		owner: string, 
	name: string
	} & maybe<IARGRepository>, 
	repositoryOwner: {
		login: string
	} & maybe<IARGRepositoryOwner>, 
	resource: {
		url: string
	} & maybe<IUniformResourceLocatable>, 
	search: {
		after: maybe<string>, 
	before: maybe<string>, 
	first: maybe<number>, 
	last: maybe<number>, 
	query: string, 
	type: SearchType
	} & ISearchResultItemConnection, 
	securityAdvisories: {
		orderBy: maybe<ISecurityAdvisoryOrder>, 
	identifier: maybe<ISecurityAdvisoryIdentifierFilter>, 
	publishedSince: maybe<string>, 
	updatedSince: maybe<string>, 
	after: maybe<string>, 
	before: maybe<string>, 
	first: maybe<number>, 
	last: maybe<number>
	} & ISecurityAdvisoryConnection, 
	securityAdvisory: {
		ghsaId: string
	} & maybe<IARGSecurityAdvisory>, 
	securityVulnerabilities: {
		orderBy: maybe<ISecurityVulnerabilityOrder>, 
	ecosystem: maybe<SecurityAdvisoryEcosystem>, 
	package: maybe<string>, 
	severities: maybe<SecurityAdvisorySeverity>, 
	after: maybe<string>, 
	before: maybe<string>, 
	first: maybe<number>, 
	last: maybe<number>
	} & ISecurityVulnerabilityConnection, 
	topic: {
		name: string
	} & maybe<IARGTopic>, 
	user: {
		login: string
	} & maybe<IARGUser>
}

interface IARGLicense {
	conditions: ILicenseRule, 
	limitations: ILicenseRule, 
	permissions: ILicenseRule
}

interface IARGMarketplaceListing {
	logoUrl: {
		size: maybe<number>
	},
app: maybe<IApp>, 
	primaryCategory: IMarketplaceCategory, 
	secondaryCategory: maybe<IMarketplaceCategory>
}

interface IARGApp {
	logoUrl: {
		size: maybe<number>
	}
}

interface IARGMarketplaceListingConnection {
	edges: maybe<IMarketplaceListingEdge>, 
	nodes: maybe<IMarketplaceListing>, 
	pageInfo: IPageInfo
}

interface IARGMarketplaceListingEdge {
	node: maybe<IMarketplaceListing>
}

interface IARGOrganization {
	avatarUrl: {
		size: maybe<number>
	},
samlIdentityProvider: maybe<IOrganizationIdentityProvider>,
members: {
		after: maybe<string>, 
	before: maybe<string>, 
	first: maybe<number>, 
	last: maybe<number>
	} & IUserConnection, 
	membersWithRole: {
		after: maybe<string>, 
	before: maybe<string>, 
	first: maybe<number>, 
	last: maybe<number>
	} & IOrganizationMemberConnection, 
	pendingMembers: {
		after: maybe<string>, 
	before: maybe<string>, 
	first: maybe<number>, 
	last: maybe<number>
	} & IUserConnection, 
	pinnedRepositories: {
		privacy: maybe<RepositoryPrivacy>, 
	orderBy: maybe<IRepositoryOrder>, 
	affiliations: maybe<RepositoryAffiliation>, 
	ownerAffiliations: maybe<RepositoryAffiliation>, 
	isLocked: maybe<boolean>, 
	after: maybe<string>, 
	before: maybe<string>, 
	first: maybe<number>, 
	last: maybe<number>
	} & IRepositoryConnection, 
	project: {
		number: number
	} & maybe<IARGProject>, 
	projects: {
		orderBy: maybe<IProjectOrder>, 
	search: maybe<string>, 
	states: maybe<ProjectState>, 
	after: maybe<string>, 
	before: maybe<string>, 
	first: maybe<number>, 
	last: maybe<number>
	} & IProjectConnection, 
	repositories: {
		privacy: maybe<RepositoryPrivacy>, 
	orderBy: maybe<IRepositoryOrder>, 
	affiliations: maybe<RepositoryAffiliation>, 
	ownerAffiliations: maybe<RepositoryAffiliation>, 
	isLocked: maybe<boolean>, 
	after: maybe<string>, 
	before: maybe<string>, 
	first: maybe<number>, 
	last: maybe<number>, 
	isFork: maybe<boolean>
	} & IRepositoryConnection, 
	repository: {
		name: string
	} & maybe<IARGRepository>, 
	team: {
		slug: string
	} & maybe<IARGTeam>, 
	teams: {
		privacy: maybe<TeamPrivacy>, 
	role: maybe<TeamRole>, 
	query: maybe<string>, 
	userLogins: maybe<string>, 
	orderBy: maybe<ITeamOrder>, 
	ldapMapped: maybe<boolean>, 
	rootTeamsOnly: maybe<boolean>, 
	after: maybe<string>, 
	before: maybe<string>, 
	first: maybe<number>, 
	last: maybe<number>
	} & ITeamConnection
}

interface IARGProject {
	creator: maybe<IActor>, 
	owner: IProjectOwner,
columns: {
		after: maybe<string>, 
	before: maybe<string>, 
	first: maybe<number>, 
	last: maybe<number>
	} & IProjectColumnConnection, 
	pendingCards: {
		archivedStates: maybe<ProjectCardArchivedState>, 
	after: maybe<string>, 
	before: maybe<string>, 
	first: maybe<number>, 
	last: maybe<number>
	} & IProjectCardConnection
}

interface IARGProjectColumnConnection {
	edges: maybe<IProjectColumnEdge>, 
	nodes: maybe<IProjectColumn>, 
	pageInfo: IPageInfo
}

interface IARGProjectColumnEdge {
	node: maybe<IProjectColumn>
}

interface IARGProjectColumn {
	project: IProject,
cards: {
		archivedStates: maybe<ProjectCardArchivedState>, 
	after: maybe<string>, 
	before: maybe<string>, 
	first: maybe<number>, 
	last: maybe<number>
	} & IProjectCardConnection
}

interface IARGProjectCardConnection {
	edges: maybe<IProjectCardEdge>, 
	nodes: maybe<IProjectCard>, 
	pageInfo: IPageInfo
}

interface IARGProjectCardEdge {
	node: maybe<IProjectCard>
}

interface IARGProjectCard {
	column: maybe<IProjectColumn>, 
	content: maybe<ProjectCardItem>, 
	creator: maybe<IActor>, 
	project: IProject
}

interface IARGIssue {
	author: maybe<IActor>, 
	editor: maybe<IActor>, 
	milestone: maybe<IMilestone>, 
	reactionGroups: maybe<IReactionGroup>, 
	repository: IRepository,
assignees: {
		after: maybe<string>, 
	before: maybe<string>, 
	first: maybe<number>, 
	last: maybe<number>
	} & IUserConnection, 
	comments: {
		after: maybe<string>, 
	before: maybe<string>, 
	first: maybe<number>, 
	last: maybe<number>
	} & IIssueCommentConnection, 
	labels: {
		after: maybe<string>, 
	before: maybe<string>, 
	first: maybe<number>, 
	last: maybe<number>
	} & maybe<ILabelConnection>, 
	participants: {
		after: maybe<string>, 
	before: maybe<string>, 
	first: maybe<number>, 
	last: maybe<number>
	} & IUserConnection, 
	projectCards: {
		archivedStates: maybe<ProjectCardArchivedState>, 
	after: maybe<string>, 
	before: maybe<string>, 
	first: maybe<number>, 
	last: maybe<number>
	} & IProjectCardConnection, 
	reactions: {
		after: maybe<string>, 
	before: maybe<string>, 
	first: maybe<number>, 
	last: maybe<number>, 
	content: maybe<ReactionContent>, 
	orderBy: maybe<IReactionOrder>
	} & IReactionConnection, 
	timeline: {
		since: maybe<string>, 
	after: maybe<string>, 
	before: maybe<string>, 
	first: maybe<number>, 
	last: maybe<number>
	} & IIssueTimelineConnection, 
	userContentEdits: {
		after: maybe<string>, 
	before: maybe<string>, 
	first: maybe<number>, 
	last: maybe<number>
	} & maybe<IUserContentEditConnection>
}

interface IARGUserConnection {
	edges: maybe<IUserEdge>, 
	nodes: maybe<IUser>, 
	pageInfo: IPageInfo
}

interface IARGUserEdge {
	node: maybe<IUser>
}

interface IARGUser {
	avatarUrl: {
		size: maybe<number>
	},
commitComments: {
		after: maybe<string>, 
	before: maybe<string>, 
	first: maybe<number>, 
	last: maybe<number>
	} & ICommitCommentConnection, 
	contributionsCollection: {
		organizationID: maybe<string>, 
	from: maybe<string>, 
	to: maybe<string>
	} & IARGContributionsCollection, 
	followers: {
		after: maybe<string>, 
	before: maybe<string>, 
	first: maybe<number>, 
	last: maybe<number>
	} & IFollowerConnection, 
	following: {
		after: maybe<string>, 
	before: maybe<string>, 
	first: maybe<number>, 
	last: maybe<number>
	} & IFollowingConnection, 
	gist: {
		name: string
	} & maybe<IARGGist>, 
	gistComments: {
		after: maybe<string>, 
	before: maybe<string>, 
	first: maybe<number>, 
	last: maybe<number>
	} & IGistCommentConnection, 
	gists: {
		privacy: maybe<GistPrivacy>, 
	orderBy: maybe<IGistOrder>, 
	after: maybe<string>, 
	before: maybe<string>, 
	first: maybe<number>, 
	last: maybe<number>
	} & IGistConnection, 
	issueComments: {
		after: maybe<string>, 
	before: maybe<string>, 
	first: maybe<number>, 
	last: maybe<number>
	} & IIssueCommentConnection, 
	issues: {
		orderBy: maybe<IIssueOrder>, 
	labels: maybe<string>, 
	states: maybe<IssueState>, 
	after: maybe<string>, 
	before: maybe<string>, 
	first: maybe<number>, 
	last: maybe<number>
	} & IIssueConnection, 
	organization: {
		login: string
	} & maybe<IARGOrganization>, 
	organizations: {
		after: maybe<string>, 
	before: maybe<string>, 
	first: maybe<number>, 
	last: maybe<number>
	} & IOrganizationConnection, 
	pinnedRepositories: {
		privacy: maybe<RepositoryPrivacy>, 
	orderBy: maybe<IRepositoryOrder>, 
	affiliations: maybe<RepositoryAffiliation>, 
	ownerAffiliations: maybe<RepositoryAffiliation>, 
	isLocked: maybe<boolean>, 
	after: maybe<string>, 
	before: maybe<string>, 
	first: maybe<number>, 
	last: maybe<number>
	} & IRepositoryConnection, 
	publicKeys: {
		after: maybe<string>, 
	before: maybe<string>, 
	first: maybe<number>, 
	last: maybe<number>
	} & IPublicKeyConnection, 
	pullRequests: {
		states: maybe<PullRequestState>, 
	labels: maybe<string>, 
	headRefName: maybe<string>, 
	baseRefName: maybe<string>, 
	orderBy: maybe<IIssueOrder>, 
	after: maybe<string>, 
	before: maybe<string>, 
	first: maybe<number>, 
	last: maybe<number>
	} & IPullRequestConnection, 
	repositories: {
		privacy: maybe<RepositoryPrivacy>, 
	orderBy: maybe<IRepositoryOrder>, 
	affiliations: maybe<RepositoryAffiliation>, 
	ownerAffiliations: maybe<RepositoryAffiliation>, 
	isLocked: maybe<boolean>, 
	after: maybe<string>, 
	before: maybe<string>, 
	first: maybe<number>, 
	last: maybe<number>, 
	isFork: maybe<boolean>
	} & IRepositoryConnection, 
	repositoriesContributedTo: {
		privacy: maybe<RepositoryPrivacy>, 
	orderBy: maybe<IRepositoryOrder>, 
	isLocked: maybe<boolean>, 
	includeUserRepositories: maybe<boolean>, 
	contributionTypes: maybe<RepositoryContributionType>, 
	after: maybe<string>, 
	before: maybe<string>, 
	first: maybe<number>, 
	last: maybe<number>
	} & IRepositoryConnection, 
	repository: {
		name: string
	} & maybe<IARGRepository>, 
	starredRepositories: {
		ownedByViewer: maybe<boolean>, 
	orderBy: maybe<IStarOrder>, 
	after: maybe<string>, 
	before: maybe<string>, 
	first: maybe<number>, 
	last: maybe<number>
	} & IStarredRepositoryConnection, 
	watching: {
		privacy: maybe<RepositoryPrivacy>, 
	orderBy: maybe<IRepositoryOrder>, 
	affiliations: maybe<RepositoryAffiliation>, 
	ownerAffiliations: maybe<RepositoryAffiliation>, 
	isLocked: maybe<boolean>, 
	after: maybe<string>, 
	before: maybe<string>, 
	first: maybe<number>, 
	last: maybe<number>
	} & IRepositoryConnection
}

interface IARGRepositoryConnection {
	edges: maybe<IRepositoryEdge>, 
	nodes: maybe<IRepository>, 
	pageInfo: IPageInfo
}

interface IARGRepositoryEdge {
	node: maybe<IRepository>
}

interface IARGRepository {
	shortDescriptionHTML: {
		limit: maybe<number>
	},
codeOfConduct: maybe<ICodeOfConduct>, 
	defaultBranchRef: maybe<IRef>, 
	licenseInfo: maybe<ILicense>, 
	owner: IRepositoryOwner, 
	parent: maybe<IRepository>, 
	primaryLanguage: maybe<ILanguage>,
assignableUsers: {
		after: maybe<string>, 
	before: maybe<string>, 
	first: maybe<number>, 
	last: maybe<number>
	} & IUserConnection, 
	branchProtectionRules: {
		after: maybe<string>, 
	before: maybe<string>, 
	first: maybe<number>, 
	last: maybe<number>
	} & IBranchProtectionRuleConnection, 
	collaborators: {
		affiliation: maybe<CollaboratorAffiliation>, 
	after: maybe<string>, 
	before: maybe<string>, 
	first: maybe<number>, 
	last: maybe<number>
	} & maybe<IRepositoryCollaboratorConnection>, 
	commitComments: {
		after: maybe<string>, 
	before: maybe<string>, 
	first: maybe<number>, 
	last: maybe<number>
	} & ICommitCommentConnection, 
	deployKeys: {
		after: maybe<string>, 
	before: maybe<string>, 
	first: maybe<number>, 
	last: maybe<number>
	} & IDeployKeyConnection, 
	deployments: {
		after: maybe<string>, 
	before: maybe<string>, 
	first: maybe<number>, 
	last: maybe<number>, 
	environments: maybe<string>
	} & IDeploymentConnection, 
	forks: {
		privacy: maybe<RepositoryPrivacy>, 
	orderBy: maybe<IRepositoryOrder>, 
	affiliations: maybe<RepositoryAffiliation>, 
	ownerAffiliations: maybe<RepositoryAffiliation>, 
	isLocked: maybe<boolean>, 
	after: maybe<string>, 
	before: maybe<string>, 
	first: maybe<number>, 
	last: maybe<number>
	} & IRepositoryConnection, 
	issue: {
		number: number
	} & maybe<IARGIssue>, 
	issueOrPullRequest: {
		number: number
	} & maybe<IssueOrPullRequest>, 
	issues: {
		orderBy: maybe<IIssueOrder>, 
	labels: maybe<string>, 
	states: maybe<IssueState>, 
	after: maybe<string>, 
	before: maybe<string>, 
	first: maybe<number>, 
	last: maybe<number>
	} & IIssueConnection, 
	label: {
		name: string
	} & maybe<IARGLabel>, 
	labels: {
		after: maybe<string>, 
	before: maybe<string>, 
	first: maybe<number>, 
	last: maybe<number>, 
	query: maybe<string>
	} & maybe<ILabelConnection>, 
	languages: {
		after: maybe<string>, 
	before: maybe<string>, 
	first: maybe<number>, 
	last: maybe<number>, 
	orderBy: maybe<ILanguageOrder>
	} & maybe<ILanguageConnection>, 
	mentionableUsers: {
		after: maybe<string>, 
	before: maybe<string>, 
	first: maybe<number>, 
	last: maybe<number>
	} & IUserConnection, 
	milestone: {
		number: number
	} & maybe<IARGMilestone>, 
	milestones: {
		after: maybe<string>, 
	before: maybe<string>, 
	first: maybe<number>, 
	last: maybe<number>, 
	states: maybe<MilestoneState>, 
	orderBy: maybe<IMilestoneOrder>
	} & maybe<IMilestoneConnection>, 
	object: {
		oid: maybe<any>, 
	expression: maybe<string>
	} & maybe<IGitObject>, 
	project: {
		number: number
	} & maybe<IARGProject>, 
	projects: {
		orderBy: maybe<IProjectOrder>, 
	search: maybe<string>, 
	states: maybe<ProjectState>, 
	after: maybe<string>, 
	before: maybe<string>, 
	first: maybe<number>, 
	last: maybe<number>
	} & IProjectConnection, 
	protectedBranches: {
		after: maybe<string>, 
	before: maybe<string>, 
	first: maybe<number>, 
	last: maybe<number>
	} & IProtectedBranchConnection, 
	pullRequest: {
		number: number
	} & maybe<IARGPullRequest>, 
	pullRequests: {
		states: maybe<PullRequestState>, 
	labels: maybe<string>, 
	headRefName: maybe<string>, 
	baseRefName: maybe<string>, 
	orderBy: maybe<IIssueOrder>, 
	after: maybe<string>, 
	before: maybe<string>, 
	first: maybe<number>, 
	last: maybe<number>
	} & IPullRequestConnection, 
	ref: {
		qualifiedName: string
	} & maybe<IARGRef>, 
	refs: {
		after: maybe<string>, 
	before: maybe<string>, 
	first: maybe<number>, 
	last: maybe<number>, 
	refPrefix: string, 
	direction: maybe<OrderDirection>, 
	orderBy: maybe<IRefOrder>
	} & maybe<IRefConnection>, 
	release: {
		tagName: string
	} & maybe<IARGRelease>, 
	releases: {
		after: maybe<string>, 
	before: maybe<string>, 
	first: maybe<number>, 
	last: maybe<number>, 
	orderBy: maybe<IReleaseOrder>
	} & IReleaseConnection, 
	repositoryTopics: {
		after: maybe<string>, 
	before: maybe<string>, 
	first: maybe<number>, 
	last: maybe<number>
	} & IRepositoryTopicConnection, 
	stargazers: {
		after: maybe<string>, 
	before: maybe<string>, 
	first: maybe<number>, 
	last: maybe<number>, 
	orderBy: maybe<IStarOrder>
	} & IStargazerConnection, 
	watchers: {
		after: maybe<string>, 
	before: maybe<string>, 
	first: maybe<number>, 
	last: maybe<number>
	} & IUserConnection
}

interface IARGStargazerConnection {
	edges: maybe<IStargazerEdge>, 
	nodes: maybe<IUser>, 
	pageInfo: IPageInfo
}

interface IARGStargazerEdge {
	node: IUser
}

interface IARGBranchProtectionRuleConnection {
	edges: maybe<IBranchProtectionRuleEdge>, 
	nodes: maybe<IBranchProtectionRule>, 
	pageInfo: IPageInfo
}

interface IARGBranchProtectionRuleEdge {
	node: maybe<IBranchProtectionRule>
}

interface IARGBranchProtectionRule {
	creator: maybe<IActor>, 
	repository: maybe<IRepository>,
branchProtectionRuleConflicts: {
		after: maybe<string>, 
	before: maybe<string>, 
	first: maybe<number>, 
	last: maybe<number>
	} & IBranchProtectionRuleConflictConnection, 
	matchingRefs: {
		after: maybe<string>, 
	before: maybe<string>, 
	first: maybe<number>, 
	last: maybe<number>
	} & IRefConnection, 
	pushAllowances: {
		after: maybe<string>, 
	before: maybe<string>, 
	first: maybe<number>, 
	last: maybe<number>
	} & IPushAllowanceConnection, 
	reviewDismissalAllowances: {
		after: maybe<string>, 
	before: maybe<string>, 
	first: maybe<number>, 
	last: maybe<number>
	} & IReviewDismissalAllowanceConnection
}

interface IARGBranchProtectionRuleConflictConnection {
	edges: maybe<IBranchProtectionRuleConflictEdge>, 
	nodes: maybe<IBranchProtectionRuleConflict>, 
	pageInfo: IPageInfo
}

interface IARGBranchProtectionRuleConflictEdge {
	node: maybe<IBranchProtectionRuleConflict>
}

interface IARGBranchProtectionRuleConflict {
	branchProtectionRule: maybe<IBranchProtectionRule>, 
	conflictingBranchProtectionRule: maybe<IBranchProtectionRule>, 
	ref: maybe<IRef>
}

interface IARGRef {
	repository: IRepository, 
	target: IGitObject,
associatedPullRequests: {
		states: maybe<PullRequestState>, 
	labels: maybe<string>, 
	headRefName: maybe<string>, 
	baseRefName: maybe<string>, 
	orderBy: maybe<IIssueOrder>, 
	after: maybe<string>, 
	before: maybe<string>, 
	first: maybe<number>, 
	last: maybe<number>
	} & IPullRequestConnection
}

interface IARGPullRequestConnection {
	edges: maybe<IPullRequestEdge>, 
	nodes: maybe<IPullRequest>, 
	pageInfo: IPageInfo
}

interface IARGPullRequestEdge {
	node: maybe<IPullRequest>
}

interface IARGPullRequest {
	author: maybe<IActor>, 
	baseRef: maybe<IRef>, 
	editor: maybe<IActor>, 
	headRef: maybe<IRef>, 
	headRepository: maybe<IRepository>, 
	headRepositoryOwner: maybe<IRepositoryOwner>, 
	mergeCommit: maybe<ICommit>, 
	mergedBy: maybe<IActor>, 
	milestone: maybe<IMilestone>, 
	potentialMergeCommit: maybe<ICommit>, 
	reactionGroups: maybe<IReactionGroup>, 
	repository: IRepository, 
	suggestedReviewers: ISuggestedReviewer,
assignees: {
		after: maybe<string>, 
	before: maybe<string>, 
	first: maybe<number>, 
	last: maybe<number>
	} & IUserConnection, 
	comments: {
		after: maybe<string>, 
	before: maybe<string>, 
	first: maybe<number>, 
	last: maybe<number>
	} & IIssueCommentConnection, 
	commits: {
		after: maybe<string>, 
	before: maybe<string>, 
	first: maybe<number>, 
	last: maybe<number>
	} & IPullRequestCommitConnection, 
	labels: {
		after: maybe<string>, 
	before: maybe<string>, 
	first: maybe<number>, 
	last: maybe<number>
	} & maybe<ILabelConnection>, 
	participants: {
		after: maybe<string>, 
	before: maybe<string>, 
	first: maybe<number>, 
	last: maybe<number>
	} & IUserConnection, 
	projectCards: {
		archivedStates: maybe<ProjectCardArchivedState>, 
	after: maybe<string>, 
	before: maybe<string>, 
	first: maybe<number>, 
	last: maybe<number>
	} & IProjectCardConnection, 
	reactions: {
		after: maybe<string>, 
	before: maybe<string>, 
	first: maybe<number>, 
	last: maybe<number>, 
	content: maybe<ReactionContent>, 
	orderBy: maybe<IReactionOrder>
	} & IReactionConnection, 
	reviewRequests: {
		after: maybe<string>, 
	before: maybe<string>, 
	first: maybe<number>, 
	last: maybe<number>
	} & maybe<IReviewRequestConnection>, 
	reviews: {
		after: maybe<string>, 
	before: maybe<string>, 
	first: maybe<number>, 
	last: maybe<number>, 
	states: maybe<PullRequestReviewState>, 
	author: maybe<string>
	} & maybe<IPullRequestReviewConnection>, 
	timeline: {
		since: maybe<string>, 
	after: maybe<string>, 
	before: maybe<string>, 
	first: maybe<number>, 
	last: maybe<number>
	} & IPullRequestTimelineConnection, 
	userContentEdits: {
		after: maybe<string>, 
	before: maybe<string>, 
	first: maybe<number>, 
	last: maybe<number>
	} & maybe<IUserContentEditConnection>
}

interface IARGUserContentEditConnection {
	edges: maybe<IUserContentEditEdge>, 
	nodes: maybe<IUserContentEdit>, 
	pageInfo: IPageInfo
}

interface IARGUserContentEditEdge {
	node: maybe<IUserContentEdit>
}

interface IARGUserContentEdit {
	deletedBy: maybe<IActor>, 
	editor: maybe<IActor>
}

interface IARGLabelConnection {
	edges: maybe<ILabelEdge>, 
	nodes: maybe<ILabel>, 
	pageInfo: IPageInfo
}

interface IARGLabelEdge {
	node: maybe<ILabel>
}

interface IARGLabel {
	repository: IRepository,
issues: {
		orderBy: maybe<IIssueOrder>, 
	labels: maybe<string>, 
	states: maybe<IssueState>, 
	after: maybe<string>, 
	before: maybe<string>, 
	first: maybe<number>, 
	last: maybe<number>
	} & IIssueConnection, 
	pullRequests: {
		states: maybe<PullRequestState>, 
	labels: maybe<string>, 
	headRefName: maybe<string>, 
	baseRefName: maybe<string>, 
	orderBy: maybe<IIssueOrder>, 
	after: maybe<string>, 
	before: maybe<string>, 
	first: maybe<number>, 
	last: maybe<number>
	} & IPullRequestConnection
}

interface IARGIssueConnection {
	edges: maybe<IIssueEdge>, 
	nodes: maybe<IIssue>, 
	pageInfo: IPageInfo
}

interface IARGIssueEdge {
	node: maybe<IIssue>
}

interface IARGReactionGroup {
	subject: IReactable,
users: {
		after: maybe<string>, 
	before: maybe<string>, 
	first: maybe<number>, 
	last: maybe<number>
	} & IReactingUserConnection
}

interface IARGReactingUserConnection {
	edges: maybe<IReactingUserEdge>, 
	nodes: maybe<IUser>, 
	pageInfo: IPageInfo
}

interface IARGReactingUserEdge {
	node: IUser
}

interface IARGReactionConnection {
	edges: maybe<IReactionEdge>, 
	nodes: maybe<IReaction>, 
	pageInfo: IPageInfo
}

interface IARGReactionEdge {
	node: maybe<IReaction>
}

interface IARGReaction {
	reactable: IReactable, 
	user: maybe<IUser>
}

interface IARGIssueCommentConnection {
	edges: maybe<IIssueCommentEdge>, 
	nodes: maybe<IIssueComment>, 
	pageInfo: IPageInfo
}

interface IARGIssueCommentEdge {
	node: maybe<IIssueComment>
}

interface IARGIssueComment {
	author: maybe<IActor>, 
	editor: maybe<IActor>, 
	issue: IIssue, 
	pullRequest: maybe<IPullRequest>, 
	reactionGroups: maybe<IReactionGroup>, 
	repository: IRepository,
reactions: {
		after: maybe<string>, 
	before: maybe<string>, 
	first: maybe<number>, 
	last: maybe<number>, 
	content: maybe<ReactionContent>, 
	orderBy: maybe<IReactionOrder>
	} & IReactionConnection, 
	userContentEdits: {
		after: maybe<string>, 
	before: maybe<string>, 
	first: maybe<number>, 
	last: maybe<number>
	} & maybe<IUserContentEditConnection>
}

interface IARGPullRequestCommitConnection {
	edges: maybe<IPullRequestCommitEdge>, 
	nodes: maybe<IPullRequestCommit>, 
	pageInfo: IPageInfo
}

interface IARGPullRequestCommitEdge {
	node: maybe<IPullRequestCommit>
}

interface IARGPullRequestCommit {
	commit: ICommit, 
	pullRequest: IPullRequest
}

interface IARGCommit {
	author: maybe<IGitActor>, 
	committer: maybe<IGitActor>, 
	repository: IRepository, 
	signature: maybe<IGitSignature>, 
	status: maybe<IStatus>, 
	tree: ITree,
blame: {
		path: string
	} & IBlame, 
	comments: {
		after: maybe<string>, 
	before: maybe<string>, 
	first: maybe<number>, 
	last: maybe<number>
	} & ICommitCommentConnection, 
	history: {
		after: maybe<string>, 
	before: maybe<string>, 
	first: maybe<number>, 
	last: maybe<number>, 
	path: maybe<string>, 
	author: maybe<ICommitAuthor>, 
	since: maybe<any>, 
	until: maybe<any>
	} & ICommitHistoryConnection, 
	parents: {
		after: maybe<string>, 
	before: maybe<string>, 
	first: maybe<number>, 
	last: maybe<number>
	} & ICommitConnection
}

interface IARGGitActor {
	avatarUrl: {
		size: maybe<number>
	},
user: maybe<IUser>
}

interface IARGBlame {
	ranges: IBlameRange
}

interface IARGBlameRange {
	commit: ICommit
}

interface IARGCommitCommentConnection {
	edges: maybe<ICommitCommentEdge>, 
	nodes: maybe<ICommitComment>, 
	pageInfo: IPageInfo
}

interface IARGCommitCommentEdge {
	node: maybe<ICommitComment>
}

interface IARGCommitComment {
	author: maybe<IActor>, 
	commit: maybe<ICommit>, 
	editor: maybe<IActor>, 
	reactionGroups: maybe<IReactionGroup>, 
	repository: IRepository,
reactions: {
		after: maybe<string>, 
	before: maybe<string>, 
	first: maybe<number>, 
	last: maybe<number>, 
	content: maybe<ReactionContent>, 
	orderBy: maybe<IReactionOrder>
	} & IReactionConnection, 
	userContentEdits: {
		after: maybe<string>, 
	before: maybe<string>, 
	first: maybe<number>, 
	last: maybe<number>
	} & maybe<IUserContentEditConnection>
}

interface IARGCommitHistoryConnection {
	edges: maybe<ICommitEdge>, 
	nodes: maybe<ICommit>, 
	pageInfo: IPageInfo
}

interface IARGCommitEdge {
	node: maybe<ICommit>
}

interface IARGCommitConnection {
	edges: maybe<ICommitEdge>, 
	nodes: maybe<ICommit>, 
	pageInfo: IPageInfo
}

interface IARGStatus {
	commit: maybe<ICommit>, 
	contexts: IStatusContext,
context: {
		name: string
	} & maybe<IStatusContext>
}

interface IARGStatusContext {
	commit: maybe<ICommit>, 
	creator: maybe<IActor>
}

interface IARGTree {
	entries: maybe<ITreeEntry>, 
	repository: IRepository
}

interface IARGTreeEntry {
	object: maybe<IGitObject>, 
	repository: IRepository
}

interface IARGMilestone {
	creator: maybe<IActor>, 
	repository: IRepository,
issues: {
		orderBy: maybe<IIssueOrder>, 
	labels: maybe<string>, 
	states: maybe<IssueState>, 
	after: maybe<string>, 
	before: maybe<string>, 
	first: maybe<number>, 
	last: maybe<number>
	} & IIssueConnection, 
	pullRequests: {
		states: maybe<PullRequestState>, 
	labels: maybe<string>, 
	headRefName: maybe<string>, 
	baseRefName: maybe<string>, 
	orderBy: maybe<IIssueOrder>, 
	after: maybe<string>, 
	before: maybe<string>, 
	first: maybe<number>, 
	last: maybe<number>
	} & IPullRequestConnection
}

interface IARGReviewRequestConnection {
	edges: maybe<IReviewRequestEdge>, 
	nodes: maybe<IReviewRequest>, 
	pageInfo: IPageInfo
}

interface IARGReviewRequestEdge {
	node: maybe<IReviewRequest>
}

interface IARGReviewRequest {
	pullRequest: IPullRequest, 
	requestedReviewer: maybe<RequestedReviewer>
}

interface IARGTeam {
	avatarUrl: {
		size: maybe<number>
	},
organization: IOrganization, 
	parentTeam: maybe<ITeam>,
ancestors: {
		after: maybe<string>, 
	before: maybe<string>, 
	first: maybe<number>, 
	last: maybe<number>
	} & ITeamConnection, 
	childTeams: {
		orderBy: maybe<ITeamOrder>, 
	userLogins: maybe<string>, 
	immediateOnly: maybe<boolean>, 
	after: maybe<string>, 
	before: maybe<string>, 
	first: maybe<number>, 
	last: maybe<number>
	} & ITeamConnection, 
	invitations: {
		after: maybe<string>, 
	before: maybe<string>, 
	first: maybe<number>, 
	last: maybe<number>
	} & maybe<IOrganizationInvitationConnection>, 
	members: {
		after: maybe<string>, 
	before: maybe<string>, 
	first: maybe<number>, 
	last: maybe<number>, 
	query: maybe<string>, 
	membership: maybe<TeamMembershipType>, 
	role: maybe<TeamMemberRole>, 
	orderBy: maybe<ITeamMemberOrder>
	} & ITeamMemberConnection, 
	repositories: {
		after: maybe<string>, 
	before: maybe<string>, 
	first: maybe<number>, 
	last: maybe<number>, 
	query: maybe<string>, 
	orderBy: maybe<ITeamRepositoryOrder>
	} & ITeamRepositoryConnection
}

interface IARGTeamConnection {
	edges: maybe<ITeamEdge>, 
	nodes: maybe<ITeam>, 
	pageInfo: IPageInfo
}

interface IARGTeamEdge {
	node: maybe<ITeam>
}

interface IARGOrganizationInvitationConnection {
	edges: maybe<IOrganizationInvitationEdge>, 
	nodes: maybe<IOrganizationInvitation>, 
	pageInfo: IPageInfo
}

interface IARGOrganizationInvitationEdge {
	node: maybe<IOrganizationInvitation>
}

interface IARGOrganizationInvitation {
	invitee: maybe<IUser>, 
	inviter: IUser, 
	organization: IOrganization
}

interface IARGTeamMemberConnection {
	edges: maybe<ITeamMemberEdge>, 
	nodes: maybe<IUser>, 
	pageInfo: IPageInfo
}

interface IARGTeamMemberEdge {
	node: IUser
}

interface IARGTeamRepositoryConnection {
	edges: maybe<ITeamRepositoryEdge>, 
	nodes: maybe<IRepository>, 
	pageInfo: IPageInfo
}

interface IARGTeamRepositoryEdge {
	node: IRepository
}

interface IARGPullRequestReviewConnection {
	edges: maybe<IPullRequestReviewEdge>, 
	nodes: maybe<IPullRequestReview>, 
	pageInfo: IPageInfo
}

interface IARGPullRequestReviewEdge {
	node: maybe<IPullRequestReview>
}

interface IARGPullRequestReview {
	author: maybe<IActor>, 
	commit: maybe<ICommit>, 
	editor: maybe<IActor>, 
	pullRequest: IPullRequest, 
	reactionGroups: maybe<IReactionGroup>, 
	repository: IRepository,
comments: {
		after: maybe<string>, 
	before: maybe<string>, 
	first: maybe<number>, 
	last: maybe<number>
	} & IPullRequestReviewCommentConnection, 
	onBehalfOf: {
		after: maybe<string>, 
	before: maybe<string>, 
	first: maybe<number>, 
	last: maybe<number>
	} & ITeamConnection, 
	reactions: {
		after: maybe<string>, 
	before: maybe<string>, 
	first: maybe<number>, 
	last: maybe<number>, 
	content: maybe<ReactionContent>, 
	orderBy: maybe<IReactionOrder>
	} & IReactionConnection, 
	userContentEdits: {
		after: maybe<string>, 
	before: maybe<string>, 
	first: maybe<number>, 
	last: maybe<number>
	} & maybe<IUserContentEditConnection>
}

interface IARGPullRequestReviewCommentConnection {
	edges: maybe<IPullRequestReviewCommentEdge>, 
	nodes: maybe<IPullRequestReviewComment>, 
	pageInfo: IPageInfo
}

interface IARGPullRequestReviewCommentEdge {
	node: maybe<IPullRequestReviewComment>
}

interface IARGPullRequestReviewComment {
	author: maybe<IActor>, 
	commit: ICommit, 
	editor: maybe<IActor>, 
	originalCommit: maybe<ICommit>, 
	pullRequest: IPullRequest, 
	pullRequestReview: maybe<IPullRequestReview>, 
	reactionGroups: maybe<IReactionGroup>, 
	replyTo: maybe<IPullRequestReviewComment>, 
	repository: IRepository,
reactions: {
		after: maybe<string>, 
	before: maybe<string>, 
	first: maybe<number>, 
	last: maybe<number>, 
	content: maybe<ReactionContent>, 
	orderBy: maybe<IReactionOrder>
	} & IReactionConnection, 
	userContentEdits: {
		after: maybe<string>, 
	before: maybe<string>, 
	first: maybe<number>, 
	last: maybe<number>
	} & maybe<IUserContentEditConnection>
}

interface IARGSuggestedReviewer {
	reviewer: IUser
}

interface IARGPullRequestTimelineConnection {
	edges: maybe<IPullRequestTimelineItemEdge>, 
	nodes: maybe<PullRequestTimelineItem>, 
	pageInfo: IPageInfo
}

interface IARGPullRequestTimelineItemEdge {
	node: maybe<PullRequestTimelineItem>
}

interface IARGCommitCommentThread {
	commit: ICommit, 
	repository: IRepository,
comments: {
		after: maybe<string>, 
	before: maybe<string>, 
	first: maybe<number>, 
	last: maybe<number>
	} & ICommitCommentConnection
}

interface IARGPullRequestReviewThread {
	pullRequest: IPullRequest, 
	repository: IRepository,
comments: {
		after: maybe<string>, 
	before: maybe<string>, 
	first: maybe<number>, 
	last: maybe<number>
	} & IPullRequestReviewCommentConnection
}

interface IARGClosedEvent {
	actor: maybe<IActor>, 
	closable: IClosable, 
	closer: maybe<Closer>
}

interface IARGReopenedEvent {
	actor: maybe<IActor>, 
	closable: IClosable
}

interface IARGSubscribedEvent {
	actor: maybe<IActor>, 
	subscribable: ISubscribable
}

interface IARGUnsubscribedEvent {
	actor: maybe<IActor>, 
	subscribable: ISubscribable
}

interface IARGMergedEvent {
	actor: maybe<IActor>, 
	commit: maybe<ICommit>, 
	mergeRef: maybe<IRef>, 
	pullRequest: IPullRequest
}

interface IARGReferencedEvent {
	actor: maybe<IActor>, 
	commit: maybe<ICommit>, 
	commitRepository: IRepository, 
	subject: ReferencedSubject
}

interface IARGCrossReferencedEvent {
	actor: maybe<IActor>, 
	source: ReferencedSubject, 
	target: ReferencedSubject
}

interface IARGAssignedEvent {
	actor: maybe<IActor>, 
	assignable: IAssignable, 
	user: maybe<IUser>
}

interface IARGUnassignedEvent {
	actor: maybe<IActor>, 
	assignable: IAssignable, 
	user: maybe<IUser>
}

interface IARGLabeledEvent {
	actor: maybe<IActor>, 
	label: ILabel, 
	labelable: ILabelable
}

interface IARGUnlabeledEvent {
	actor: maybe<IActor>, 
	label: ILabel, 
	labelable: ILabelable
}

interface IARGMilestonedEvent {
	actor: maybe<IActor>, 
	subject: MilestoneItem
}

interface IARGDemilestonedEvent {
	actor: maybe<IActor>, 
	subject: MilestoneItem
}

interface IARGRenamedTitleEvent {
	actor: maybe<IActor>, 
	subject: RenamedTitleSubject
}

interface IARGLockedEvent {
	actor: maybe<IActor>, 
	lockable: ILockable
}

interface IARGUnlockedEvent {
	actor: maybe<IActor>, 
	lockable: ILockable
}

interface IARGDeployedEvent {
	actor: maybe<IActor>, 
	deployment: IDeployment, 
	pullRequest: IPullRequest, 
	ref: maybe<IRef>
}

interface IARGDeployment {
	commit: maybe<ICommit>, 
	creator: maybe<IActor>, 
	latestStatus: maybe<IDeploymentStatus>, 
	ref: maybe<IRef>, 
	repository: IRepository,
statuses: {
		after: maybe<string>, 
	before: maybe<string>, 
	first: maybe<number>, 
	last: maybe<number>
	} & maybe<IDeploymentStatusConnection>
}

interface IARGDeploymentStatus {
	creator: maybe<IActor>, 
	deployment: IDeployment
}

interface IARGDeploymentStatusConnection {
	edges: maybe<IDeploymentStatusEdge>, 
	nodes: maybe<IDeploymentStatus>, 
	pageInfo: IPageInfo
}

interface IARGDeploymentStatusEdge {
	node: maybe<IDeploymentStatus>
}

interface IARGDeploymentEnvironmentChangedEvent {
	actor: maybe<IActor>, 
	deploymentStatus: IDeploymentStatus, 
	pullRequest: IPullRequest
}

interface IARGHeadRefDeletedEvent {
	actor: maybe<IActor>, 
	headRef: maybe<IRef>, 
	pullRequest: IPullRequest
}

interface IARGHeadRefRestoredEvent {
	actor: maybe<IActor>, 
	pullRequest: IPullRequest
}

interface IARGHeadRefForcePushedEvent {
	actor: maybe<IActor>, 
	afterCommit: maybe<ICommit>, 
	beforeCommit: maybe<ICommit>, 
	pullRequest: IPullRequest, 
	ref: maybe<IRef>
}

interface IARGBaseRefForcePushedEvent {
	actor: maybe<IActor>, 
	afterCommit: maybe<ICommit>, 
	beforeCommit: maybe<ICommit>, 
	pullRequest: IPullRequest, 
	ref: maybe<IRef>
}

interface IARGReviewRequestedEvent {
	actor: maybe<IActor>, 
	pullRequest: IPullRequest, 
	requestedReviewer: maybe<RequestedReviewer>
}

interface IARGReviewRequestRemovedEvent {
	actor: maybe<IActor>, 
	pullRequest: IPullRequest, 
	requestedReviewer: maybe<RequestedReviewer>
}

interface IARGReviewDismissedEvent {
	actor: maybe<IActor>, 
	pullRequest: IPullRequest, 
	pullRequestCommit: maybe<IPullRequestCommit>, 
	review: maybe<IPullRequestReview>
}

interface IARGRefConnection {
	edges: maybe<IRefEdge>, 
	nodes: maybe<IRef>, 
	pageInfo: IPageInfo
}

interface IARGRefEdge {
	node: maybe<IRef>
}

interface IARGPushAllowanceConnection {
	edges: maybe<IPushAllowanceEdge>, 
	nodes: maybe<IPushAllowance>, 
	pageInfo: IPageInfo
}

interface IARGPushAllowanceEdge {
	node: maybe<IPushAllowance>
}

interface IARGPushAllowance {
	actor: maybe<PushAllowanceActor>, 
	branchProtectionRule: maybe<IBranchProtectionRule>
}

interface IARGReviewDismissalAllowanceConnection {
	edges: maybe<IReviewDismissalAllowanceEdge>, 
	nodes: maybe<IReviewDismissalAllowance>, 
	pageInfo: IPageInfo
}

interface IARGReviewDismissalAllowanceEdge {
	node: maybe<IReviewDismissalAllowance>
}

interface IARGReviewDismissalAllowance {
	actor: maybe<ReviewDismissalAllowanceActor>, 
	branchProtectionRule: maybe<IBranchProtectionRule>
}

interface IARGRepositoryCollaboratorConnection {
	edges: maybe<IRepositoryCollaboratorEdge>, 
	nodes: maybe<IUser>, 
	pageInfo: IPageInfo
}

interface IARGRepositoryCollaboratorEdge {
	node: IUser
}

interface IARGDeployKeyConnection {
	edges: maybe<IDeployKeyEdge>, 
	nodes: maybe<IDeployKey>, 
	pageInfo: IPageInfo
}

interface IARGDeployKeyEdge {
	node: maybe<IDeployKey>
}

interface IARGDeploymentConnection {
	edges: maybe<IDeploymentEdge>, 
	nodes: maybe<IDeployment>, 
	pageInfo: IPageInfo
}

interface IARGDeploymentEdge {
	node: maybe<IDeployment>
}

interface IARGLanguageConnection {
	edges: maybe<ILanguageEdge>, 
	nodes: maybe<ILanguage>, 
	pageInfo: IPageInfo
}

interface IARGLanguageEdge {
	node: ILanguage
}

interface IARGMilestoneConnection {
	edges: maybe<IMilestoneEdge>, 
	nodes: maybe<IMilestone>, 
	pageInfo: IPageInfo
}

interface IARGMilestoneEdge {
	node: maybe<IMilestone>
}

interface IARGProjectConnection {
	edges: maybe<IProjectEdge>, 
	nodes: maybe<IProject>, 
	pageInfo: IPageInfo
}

interface IARGProjectEdge {
	node: maybe<IProject>
}

interface IARGProtectedBranchConnection {
	edges: maybe<IProtectedBranchEdge>, 
	nodes: maybe<IProtectedBranch>, 
	pageInfo: IPageInfo
}

interface IARGProtectedBranchEdge {
	node: maybe<IProtectedBranch>
}

interface IARGProtectedBranch {
	creator: maybe<IActor>, 
	repository: IRepository,
pushAllowances: {
		after: maybe<string>, 
	before: maybe<string>, 
	first: maybe<number>, 
	last: maybe<number>
	} & IPushAllowanceConnection, 
	reviewDismissalAllowances: {
		after: maybe<string>, 
	before: maybe<string>, 
	first: maybe<number>, 
	last: maybe<number>
	} & IReviewDismissalAllowanceConnection
}

interface IARGRelease {
	author: maybe<IUser>, 
	tag: maybe<IRef>,
releaseAssets: {
		after: maybe<string>, 
	before: maybe<string>, 
	first: maybe<number>, 
	last: maybe<number>, 
	name: maybe<string>
	} & IReleaseAssetConnection
}

interface IARGReleaseAssetConnection {
	edges: maybe<IReleaseAssetEdge>, 
	nodes: maybe<IReleaseAsset>, 
	pageInfo: IPageInfo
}

interface IARGReleaseAssetEdge {
	node: maybe<IReleaseAsset>
}

interface IARGReleaseAsset {
	release: maybe<IRelease>, 
	uploadedBy: IUser
}

interface IARGReleaseConnection {
	edges: maybe<IReleaseEdge>, 
	nodes: maybe<IRelease>, 
	pageInfo: IPageInfo
}

interface IARGReleaseEdge {
	node: maybe<IRelease>
}

interface IARGRepositoryTopicConnection {
	edges: maybe<IRepositoryTopicEdge>, 
	nodes: maybe<IRepositoryTopic>, 
	pageInfo: IPageInfo
}

interface IARGRepositoryTopicEdge {
	node: maybe<IRepositoryTopic>
}

interface IARGRepositoryTopic {
	topic: ITopic
}

interface IARGTopic {
	relatedTopics: {
		first: maybe<number>
	} & IARGTopic, 
	stargazers: {
		after: maybe<string>, 
	before: maybe<string>, 
	first: maybe<number>, 
	last: maybe<number>, 
	orderBy: maybe<IStarOrder>
	} & IStargazerConnection
}

interface IARGContributionsCollection {
	totalIssueContributions: {
		excludeFirst: maybe<boolean>, 
	excludePopular: maybe<boolean>
	}, 
	totalPullRequestContributions: {
		excludeFirst: maybe<boolean>, 
	excludePopular: maybe<boolean>
	}, 
	totalRepositoriesWithContributedIssues: {
		excludeFirst: maybe<boolean>, 
	excludePopular: maybe<boolean>
	}, 
	totalRepositoriesWithContributedPullRequests: {
		excludeFirst: maybe<boolean>, 
	excludePopular: maybe<boolean>
	}, 
	totalRepositoryContributions: {
		excludeFirst: maybe<boolean>
	},
contributionCalendar: IContributionCalendar, 
	mostRecentCollectionWithActivity: maybe<IContributionsCollection>, 
	mostRecentCollectionWithoutActivity: maybe<IContributionsCollection>, 
	popularIssueContribution: maybe<ICreatedIssueContribution>, 
	popularPullRequestContribution: maybe<ICreatedPullRequestContribution>, 
	user: IUser,
firstIssueContribution: {
		ignoreTimeRange: maybe<boolean>
	} & maybe<CreatedIssueOrRestrictedContribution>, 
	firstPullRequestContribution: {
		ignoreTimeRange: maybe<boolean>
	} & maybe<CreatedPullRequestOrRestrictedContribution>, 
	issueContributions: {
		after: maybe<string>, 
	before: maybe<string>, 
	first: maybe<number>, 
	last: maybe<number>, 
	excludeFirst: maybe<boolean>, 
	excludePopular: maybe<boolean>
	} & ICreatedIssueContributionConnection, 
	joinedGitHubContribution: {
		ignoreTimeRange: maybe<boolean>
	} & maybe<IJoinedGitHubContribution>
}

interface IARGContributionCalendar {
	months: IContributionCalendarMonth, 
	weeks: IContributionCalendarWeek
}

interface IARGContributionCalendarWeek {
	contributionDays: IContributionCalendarDay
}

interface IARGCreatedIssueContribution {
	issue: IIssue, 
	user: IUser
}

interface IARGRestrictedContribution {
	user: IUser
}

interface IARGCreatedPullRequestContribution {
	pullRequest: IPullRequest, 
	user: IUser
}

interface IARGCreatedIssueContributionConnection {
	edges: maybe<ICreatedIssueContributionEdge>, 
	nodes: maybe<ICreatedIssueContribution>, 
	pageInfo: IPageInfo
}

interface IARGCreatedIssueContributionEdge {
	node: maybe<ICreatedIssueContribution>
}

interface IARGJoinedGitHubContribution {
	user: IUser
}

interface IARGFollowerConnection {
	edges: maybe<IUserEdge>, 
	nodes: maybe<IUser>, 
	pageInfo: IPageInfo
}

interface IARGFollowingConnection {
	edges: maybe<IUserEdge>, 
	nodes: maybe<IUser>, 
	pageInfo: IPageInfo
}

interface IARGGist {
	owner: maybe<IRepositoryOwner>,
comments: {
		after: maybe<string>, 
	before: maybe<string>, 
	first: maybe<number>, 
	last: maybe<number>
	} & IGistCommentConnection, 
	stargazers: {
		after: maybe<string>, 
	before: maybe<string>, 
	first: maybe<number>, 
	last: maybe<number>, 
	orderBy: maybe<IStarOrder>
	} & IStargazerConnection
}

interface IARGGistCommentConnection {
	edges: maybe<IGistCommentEdge>, 
	nodes: maybe<IGistComment>, 
	pageInfo: IPageInfo
}

interface IARGGistCommentEdge {
	node: maybe<IGistComment>
}

interface IARGGistComment {
	author: maybe<IActor>, 
	editor: maybe<IActor>, 
	gist: IGist,
userContentEdits: {
		after: maybe<string>, 
	before: maybe<string>, 
	first: maybe<number>, 
	last: maybe<number>
	} & maybe<IUserContentEditConnection>
}

interface IARGGistConnection {
	edges: maybe<IGistEdge>, 
	nodes: maybe<IGist>, 
	pageInfo: IPageInfo
}

interface IARGGistEdge {
	node: maybe<IGist>
}

interface IARGOrganizationConnection {
	edges: maybe<IOrganizationEdge>, 
	nodes: maybe<IOrganization>, 
	pageInfo: IPageInfo
}

interface IARGOrganizationEdge {
	node: maybe<IOrganization>
}

interface IARGPublicKeyConnection {
	edges: maybe<IPublicKeyEdge>, 
	nodes: maybe<IPublicKey>, 
	pageInfo: IPageInfo
}

interface IARGPublicKeyEdge {
	node: maybe<IPublicKey>
}

interface IARGStarredRepositoryConnection {
	edges: maybe<IStarredRepositoryEdge>, 
	nodes: maybe<IRepository>, 
	pageInfo: IPageInfo
}

interface IARGStarredRepositoryEdge {
	node: IRepository
}

interface IARGIssueTimelineConnection {
	edges: maybe<IIssueTimelineItemEdge>, 
	nodes: maybe<IssueTimelineItem>, 
	pageInfo: IPageInfo
}

interface IARGIssueTimelineItemEdge {
	node: maybe<IssueTimelineItem>
}

interface IARGTransferredEvent {
	actor: maybe<IActor>, 
	fromRepository: maybe<IRepository>, 
	issue: IIssue
}

interface IARGOrganizationMemberConnection {
	edges: maybe<IOrganizationMemberEdge>, 
	nodes: maybe<IUser>, 
	pageInfo: IPageInfo
}

interface IARGOrganizationMemberEdge {
	node: maybe<IUser>
}

interface IARGOrganizationIdentityProvider {
	organization: maybe<IOrganization>,
externalIdentities: {
		after: maybe<string>, 
	before: maybe<string>, 
	first: maybe<number>, 
	last: maybe<number>
	} & IExternalIdentityConnection
}

interface IARGExternalIdentityConnection {
	edges: maybe<IExternalIdentityEdge>, 
	nodes: maybe<IExternalIdentity>, 
	pageInfo: IPageInfo
}

interface IARGExternalIdentityEdge {
	node: maybe<IExternalIdentity>
}

interface IARGExternalIdentity {
	organizationInvitation: maybe<IOrganizationInvitation>, 
	samlIdentity: maybe<IExternalIdentitySamlAttributes>, 
	scimIdentity: maybe<IExternalIdentityScimAttributes>, 
	user: maybe<IUser>
}

interface IARGSearchResultItemConnection {
	edges: maybe<ISearchResultItemEdge>, 
	nodes: maybe<SearchResultItem>, 
	pageInfo: IPageInfo
}

interface IARGSearchResultItemEdge {
	node: maybe<SearchResultItem>, 
	textMatches: maybe<ITextMatch>
}

interface IARGTextMatch {
	highlights: ITextMatchHighlight
}

interface IARGSecurityAdvisoryConnection {
	edges: maybe<ISecurityAdvisoryEdge>, 
	nodes: maybe<ISecurityAdvisory>, 
	pageInfo: IPageInfo
}

interface IARGSecurityAdvisoryEdge {
	node: maybe<ISecurityAdvisory>
}

interface IARGSecurityAdvisory {
	identifiers: ISecurityAdvisoryIdentifier, 
	references: ISecurityAdvisoryReference,
vulnerabilities: {
		orderBy: maybe<ISecurityVulnerabilityOrder>, 
	ecosystem: maybe<SecurityAdvisoryEcosystem>, 
	package: maybe<string>, 
	severities: maybe<SecurityAdvisorySeverity>, 
	after: maybe<string>, 
	before: maybe<string>, 
	first: maybe<number>, 
	last: maybe<number>
	} & ISecurityVulnerabilityConnection
}

interface IARGSecurityVulnerabilityConnection {
	edges: maybe<ISecurityVulnerabilityEdge>, 
	nodes: maybe<ISecurityVulnerability>, 
	pageInfo: IPageInfo
}

interface IARGSecurityVulnerabilityEdge {
	node: maybe<ISecurityVulnerability>
}

interface IARGSecurityVulnerability {
	advisory: ISecurityAdvisory, 
	firstPatchedVersion: maybe<ISecurityAdvisoryPackageVersion>, 
	package: ISecurityAdvisoryPackage
}

interface IARGMutation {
	acceptTopicSuggestion: {
		input: IAcceptTopicSuggestionInput
	} & maybe<IAcceptTopicSuggestionPayload>, 
	addComment: {
		input: IAddCommentInput
	} & maybe<IAddCommentPayload>, 
	addProjectCard: {
		input: IAddProjectCardInput
	} & maybe<IAddProjectCardPayload>, 
	addProjectColumn: {
		input: IAddProjectColumnInput
	} & maybe<IAddProjectColumnPayload>, 
	addPullRequestReview: {
		input: IAddPullRequestReviewInput
	} & maybe<IAddPullRequestReviewPayload>, 
	addPullRequestReviewComment: {
		input: IAddPullRequestReviewCommentInput
	} & maybe<IAddPullRequestReviewCommentPayload>, 
	addReaction: {
		input: IAddReactionInput
	} & maybe<IAddReactionPayload>, 
	addStar: {
		input: IAddStarInput
	} & maybe<IAddStarPayload>, 
	createBranchProtectionRule: {
		input: ICreateBranchProtectionRuleInput
	} & maybe<ICreateBranchProtectionRulePayload>, 
	createProject: {
		input: ICreateProjectInput
	} & maybe<ICreateProjectPayload>, 
	declineTopicSuggestion: {
		input: IDeclineTopicSuggestionInput
	} & maybe<IDeclineTopicSuggestionPayload>, 
	deleteBranchProtectionRule: {
		input: IDeleteBranchProtectionRuleInput
	} & maybe<IDeleteBranchProtectionRulePayload>, 
	deleteProject: {
		input: IDeleteProjectInput
	} & maybe<IDeleteProjectPayload>, 
	deleteProjectCard: {
		input: IDeleteProjectCardInput
	} & maybe<IDeleteProjectCardPayload>, 
	deleteProjectColumn: {
		input: IDeleteProjectColumnInput
	} & maybe<IDeleteProjectColumnPayload>, 
	deletePullRequestReview: {
		input: IDeletePullRequestReviewInput
	} & maybe<IDeletePullRequestReviewPayload>, 
	dismissPullRequestReview: {
		input: IDismissPullRequestReviewInput
	} & maybe<IDismissPullRequestReviewPayload>, 
	lockLockable: {
		input: ILockLockableInput
	} & maybe<ILockLockablePayload>, 
	moveProjectCard: {
		input: IMoveProjectCardInput
	} & maybe<IMoveProjectCardPayload>, 
	moveProjectColumn: {
		input: IMoveProjectColumnInput
	} & maybe<IMoveProjectColumnPayload>, 
	removeOutsideCollaborator: {
		input: IRemoveOutsideCollaboratorInput
	} & maybe<IRemoveOutsideCollaboratorPayload>, 
	removeReaction: {
		input: IRemoveReactionInput
	} & maybe<IRemoveReactionPayload>, 
	removeStar: {
		input: IRemoveStarInput
	} & maybe<IRemoveStarPayload>, 
	requestReviews: {
		input: IRequestReviewsInput
	} & maybe<IRequestReviewsPayload>, 
	submitPullRequestReview: {
		input: ISubmitPullRequestReviewInput
	} & maybe<ISubmitPullRequestReviewPayload>, 
	unlockLockable: {
		input: IUnlockLockableInput
	} & maybe<IUnlockLockablePayload>, 
	updateBranchProtectionRule: {
		input: IUpdateBranchProtectionRuleInput
	} & maybe<IUpdateBranchProtectionRulePayload>, 
	updateProject: {
		input: IUpdateProjectInput
	} & maybe<IUpdateProjectPayload>, 
	updateProjectCard: {
		input: IUpdateProjectCardInput
	} & maybe<IUpdateProjectCardPayload>, 
	updateProjectColumn: {
		input: IUpdateProjectColumnInput
	} & maybe<IUpdateProjectColumnPayload>, 
	updatePullRequestReview: {
		input: IUpdatePullRequestReviewInput
	} & maybe<IUpdatePullRequestReviewPayload>, 
	updatePullRequestReviewComment: {
		input: IUpdatePullRequestReviewCommentInput
	} & maybe<IUpdatePullRequestReviewCommentPayload>, 
	updateSubscription: {
		input: IUpdateSubscriptionInput
	} & maybe<IUpdateSubscriptionPayload>, 
	updateTopics: {
		input: IUpdateTopicsInput
	} & maybe<IUpdateTopicsPayload>
}

interface IARGAcceptTopicSuggestionPayload {
	topic: maybe<ITopic>
}

interface IARGAddCommentPayload {
	commentEdge: maybe<IIssueCommentEdge>, 
	subject: maybe<INode>, 
	timelineEdge: maybe<IIssueTimelineItemEdge>
}

interface IARGAddProjectCardPayload {
	cardEdge: maybe<IProjectCardEdge>, 
	projectColumn: maybe<IProjectColumn>
}

interface IARGAddProjectColumnPayload {
	columnEdge: maybe<IProjectColumnEdge>, 
	project: maybe<IProject>
}

interface IARGAddPullRequestReviewPayload {
	pullRequestReview: maybe<IPullRequestReview>, 
	reviewEdge: maybe<IPullRequestReviewEdge>
}

interface IARGAddPullRequestReviewCommentPayload {
	comment: maybe<IPullRequestReviewComment>, 
	commentEdge: maybe<IPullRequestReviewCommentEdge>
}

interface IARGAddReactionPayload {
	reaction: maybe<IReaction>, 
	subject: maybe<IReactable>
}

interface IARGAddStarPayload {
	starrable: maybe<IStarrable>
}

interface IARGCreateBranchProtectionRulePayload {
	branchProtectionRule: maybe<IBranchProtectionRule>
}

interface IARGCreateProjectPayload {
	project: maybe<IProject>
}

interface IARGDeclineTopicSuggestionPayload {
	topic: maybe<ITopic>
}

interface IARGDeleteProjectPayload {
	owner: maybe<IProjectOwner>
}

interface IARGDeleteProjectCardPayload {
	column: maybe<IProjectColumn>
}

interface IARGDeleteProjectColumnPayload {
	project: maybe<IProject>
}

interface IARGDeletePullRequestReviewPayload {
	pullRequestReview: maybe<IPullRequestReview>
}

interface IARGDismissPullRequestReviewPayload {
	pullRequestReview: maybe<IPullRequestReview>
}

interface IARGLockLockablePayload {
	lockedRecord: maybe<ILockable>
}

interface IARGMoveProjectCardPayload {
	cardEdge: maybe<IProjectCardEdge>
}

interface IARGMoveProjectColumnPayload {
	columnEdge: maybe<IProjectColumnEdge>
}

interface IARGRemoveOutsideCollaboratorPayload {
	removedUser: maybe<IUser>
}

interface IARGRemoveReactionPayload {
	reaction: maybe<IReaction>, 
	subject: maybe<IReactable>
}

interface IARGRemoveStarPayload {
	starrable: maybe<IStarrable>
}

interface IARGRequestReviewsPayload {
	pullRequest: maybe<IPullRequest>, 
	requestedReviewersEdge: maybe<IUserEdge>
}

interface IARGSubmitPullRequestReviewPayload {
	pullRequestReview: maybe<IPullRequestReview>
}

interface IARGUnlockLockablePayload {
	unlockedRecord: maybe<ILockable>
}

interface IARGUpdateBranchProtectionRulePayload {
	branchProtectionRule: maybe<IBranchProtectionRule>
}

interface IARGUpdateProjectPayload {
	project: maybe<IProject>
}

interface IARGUpdateProjectCardPayload {
	projectCard: maybe<IProjectCard>
}

interface IARGUpdateProjectColumnPayload {
	projectColumn: maybe<IProjectColumn>
}

interface IARGUpdatePullRequestReviewPayload {
	pullRequestReview: maybe<IPullRequestReview>
}

interface IARGUpdatePullRequestReviewCommentPayload {
	pullRequestReviewComment: maybe<IPullRequestReviewComment>
}

interface IARGUpdateSubscriptionPayload {
	subscribable: maybe<ISubscribable>
}

interface IARGUpdateTopicsPayload {
	repository: maybe<IRepository>
}

interface IARGRepositoryInvitationEdge {
	node: maybe<IRepositoryInvitation>
}

interface IARGRepositoryInvitation {
	invitee: IUser, 
	inviter: IUser, 
	repository: maybe<IRepositoryInfo>
}

interface IARGBot {
	avatarUrl: {
		size: maybe<number>
	}
}

interface IARGBlob {
	repository: IRepository
}

interface IARGPullRequestTimelineItemsEdge {
	node: maybe<PullRequestTimelineItems>
}

interface IARGBaseRefChangedEvent {
	actor: maybe<IActor>
}

interface IARGAddedToProjectEvent {
	actor: maybe<IActor>
}

interface IARGCommentDeletedEvent {
	actor: maybe<IActor>
}

interface IARGConvertedNoteToIssueEvent {
	actor: maybe<IActor>
}

interface IARGMentionedEvent {
	actor: maybe<IActor>
}

interface IARGMovedColumnsInProjectEvent {
	actor: maybe<IActor>
}

interface IARGPinnedEvent {
	actor: maybe<IActor>, 
	issue: IIssue
}

interface IARGRemovedFromProjectEvent {
	actor: maybe<IActor>
}

interface IARGUnpinnedEvent {
	actor: maybe<IActor>, 
	issue: IIssue
}

interface IARGIssueTimelineItemsEdge {
	node: maybe<IssueTimelineItems>
}

interface IARGTopicConnection {
	edges: maybe<ITopicEdge>, 
	nodes: maybe<ITopic>, 
	pageInfo: IPageInfo
}

interface IARGTopicEdge {
	node: maybe<ITopic>
}

interface IARGCreatedPullRequestContributionConnection {
	edges: maybe<ICreatedPullRequestContributionEdge>, 
	nodes: maybe<ICreatedPullRequestContribution>, 
	pageInfo: IPageInfo
}

interface IARGCreatedPullRequestContributionEdge {
	node: maybe<ICreatedPullRequestContribution>
}

interface IARGAppEdge {
	node: maybe<IApp>
}

interface IARGContentAttachment {
	contentReference: IContentReference
}

interface IARGGpgSignature {
	signer: maybe<IUser>
}

interface IARGSmimeSignature {
	signer: maybe<IUser>
}

interface IARGTag {
	repository: IRepository, 
	tagger: maybe<IGitActor>, 
	target: IGitObject
}

interface IARGUnknownSignature {
	signer: maybe<IUser>
}