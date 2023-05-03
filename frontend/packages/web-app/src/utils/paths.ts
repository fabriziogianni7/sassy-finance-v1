/* TOP LEVEL PAGES ========================================================== */
export const Landing = '/';
export const CreateDAO = '/create';
export const NotFound = '/not-found';

/* DAO-SPECIFIC PAGES ======================================================= */

export const Dashboard = '/daos/:network/:dao/dashboard';
export const Finance = '/daos/:network/:dao/finance';
export const Governance = '/daos/:network/:dao/governance';
export const Community = '/daos/:network/:dao/community';
export const Settings = '/daos/:network/:dao/settings';
export const EditSettings = '/daos/:network/:dao/settings/edit';
export const ProposeNewSettings = '/daos/:network/:dao/settings/new-proposal';

export const AllTokens = '/daos/:network/:dao/finance/tokens';
export const AllTransfers = '/daos/:network/:dao/finance/transfers';
export const NewDeposit = '/daos/:network/:dao/finance/new-deposit';
export const NewWithDraw = '/daos/:network/:dao/finance/new-withdrawal';
export const NewStrategy = '/daos/:network/:dao/finance/new-strategy';
export const Strategy = '/daos/:network/:dao/finance/strategy/:id';
export const Swap = '/daos/:network/:dao/finance/swap';
export const BuyNFT = '/daos/:network/:dao/finance/buy-nft';


export const Proposal = '/daos/:network/:dao/governance/proposals/:id';
export const NewProposal = '/daos/:network/:dao/governance/new-proposal';
export const MintTokensProposal = '/daos/:network/:dao/community/mint-tokens';
export const ManageMembersProposal =
  '/daos/:network/:dao/community/manage-members';
