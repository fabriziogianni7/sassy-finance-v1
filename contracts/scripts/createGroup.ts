import { ethers } from "hardhat";

async function main() {

    // { plugin: '0x71808a731cEe30F4bF4B0B46E55d0545f6df40E2' }
    // { pluginSetupRepo: '0x8230232087928E56b7d8Bb86fF00E729Cf28c8aF' }


    const GroupVoting = await ethers.getContractFactory("GroupVoting");
    const groupVoting = GroupVoting.attach('0x54F634508A378C5185719a310A11E7A32EB7185b')

    const txcreate = await groupVoting.createGroup(
        "groupName",
        ["0x7C61C48919805eDC3Bd75ace9d7211Fb3b0Ed13D", "0x7C61C48919805eDC3Bd75ace9d7211Fb3b0Ed13D"],
        "0xe9dce89b076ba6107bb64ef30678efec11939234",
        0
    )

    await txcreate.wait()

}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});


