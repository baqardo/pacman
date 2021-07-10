var ghostsInfo = [];
ghostsInfo[0] = [11,13,1,1];
ghostsInfo[1] = [16,13,-1,2];
ghostsInfo[2] = [11,15,1,3];
ghostsInfo[3] = [16,15,-1,4];

//                x y  xs ys, img,
var pacmanInfo = [0,14,1,0];
var ownColor = '#f6ff9b';

function specialPointCreator_for_ghost1()
{
    tab_specialpoints_for_ghost_1[0] = new Specialpoint_for_ghost(1,1,0,1,1,0);
    tab_specialpoints_for_ghost_1[1] = new Specialpoint_for_ghost(6,1,0,1,1,1);
    tab_specialpoints_for_ghost_1[2] = new Specialpoint_for_ghost(12,1,0,0,1,1);
    tab_specialpoints_for_ghost_1[3] = new Specialpoint_for_ghost(15,1,0,1,1,0);
    tab_specialpoints_for_ghost_1[4] = new Specialpoint_for_ghost(21,1,0,1,1,1);
    tab_specialpoints_for_ghost_1[5] = new Specialpoint_for_ghost(26,1,0,0,1,1);
    tab_specialpoints_for_ghost_1[6] = new Specialpoint_for_ghost(1,4,1,1,0,0);
    tab_specialpoints_for_ghost_1[7] = new Specialpoint_for_ghost(3,4,0,0,1,1);
    tab_specialpoints_for_ghost_1[8] = new Specialpoint_for_ghost(6,4,1,1,1,0);
    tab_specialpoints_for_ghost_1[9] = new Specialpoint_for_ghost(9,4,0,0,1,1);
    tab_specialpoints_for_ghost_1[10] = new Specialpoint_for_ghost(18,4,0,1,1,0);
    tab_specialpoints_for_ghost_1[11] = new Specialpoint_for_ghost(21,4,1,0,1,1);
    tab_specialpoints_for_ghost_1[12] = new Specialpoint_for_ghost(24,4,0,1,1,0);
    tab_specialpoints_for_ghost_1[13] = new Specialpoint_for_ghost(26,4,1,0,0,1);
    tab_specialpoints_for_ghost_1[14] = new Specialpoint_for_ghost(12,5,1,1,1,0);
    tab_specialpoints_for_ghost_1[15] = new Specialpoint_for_ghost(15,5,1,0,1,1);
    tab_specialpoints_for_ghost_1[16] = new Specialpoint_for_ghost(3,8,1,1,1,0);
    tab_specialpoints_for_ghost_1[17] = new Specialpoint_for_ghost(6,8,1,0,0,1);
    tab_specialpoints_for_ghost_1[18] = new Specialpoint_for_ghost(9,8,1,1,1,0);
    tab_specialpoints_for_ghost_1[19] = new Specialpoint_for_ghost(12,8,1,0,0,1);
    tab_specialpoints_for_ghost_1[20] = new Specialpoint_for_ghost(15,8,1,1,0,0);
    tab_specialpoints_for_ghost_1[21] = new Specialpoint_for_ghost(18,8,1,0,1,1);
    tab_specialpoints_for_ghost_1[22] = new Specialpoint_for_ghost(21,8,1,1,0,0);
    tab_specialpoints_for_ghost_1[23] = new Specialpoint_for_ghost(24,8,1,0,1,1);
    tab_specialpoints_for_ghost_1[24] = new Specialpoint_for_ghost(3,11,1,1,1,0);
    tab_specialpoints_for_ghost_1[25] = new Specialpoint_for_ghost(6,11,0,1,1,1);
    tab_specialpoints_for_ghost_1[26] = new Specialpoint_for_ghost(9,11,1,1,1,1);
    tab_specialpoints_for_ghost_1[27] = new Specialpoint_for_ghost(12,11,0,1,0,1);
    tab_specialpoints_for_ghost_1[28] = new Specialpoint_for_ghost(13,11,0,1,0,1);
    tab_specialpoints_for_ghost_1[29] = new Specialpoint_for_ghost(18,11,1,1,1,1);
    tab_specialpoints_for_ghost_1[30] = new Specialpoint_for_ghost(21,11,0,1,1,1);
    tab_specialpoints_for_ghost_1[31] = new Specialpoint_for_ghost(24,11,1,0,1,1);
    tab_specialpoints_for_ghost_1[32] = new Specialpoint_for_ghost(3,14,1,0,0,1);
    tab_specialpoints_for_ghost_1[33] = new Specialpoint_for_ghost(24,14,1,1,0,0);
    tab_specialpoints_for_ghost_1[34] = new Specialpoint_for_ghost(3,17,0,0,1,1);
    tab_specialpoints_for_ghost_1[35] = new Specialpoint_for_ghost(9,17,1,1,0,0);
    tab_specialpoints_for_ghost_1[36] = new Specialpoint_for_ghost(12,17,0,1,1,1);
    tab_specialpoints_for_ghost_1[37] = new Specialpoint_for_ghost(15,17,0,1,1,1);
    tab_specialpoints_for_ghost_1[38] = new Specialpoint_for_ghost(18,17,1,0,0,1);
    tab_specialpoints_for_ghost_1[39] = new Specialpoint_for_ghost(24,17,0,1,1,0);
    tab_specialpoints_for_ghost_1[40] = new Specialpoint_for_ghost(3,20,1,1,1,0);
    tab_specialpoints_for_ghost_1[41] = new Specialpoint_for_ghost(6,20,1,0,1,1);
    tab_specialpoints_for_ghost_1[42] = new Specialpoint_for_ghost(9,20,0,1,1,0);
    tab_specialpoints_for_ghost_1[43] = new Specialpoint_for_ghost(12,20,1,0,0,1);
    tab_specialpoints_for_ghost_1[44] = new Specialpoint_for_ghost(15,20,1,1,0,0);
    tab_specialpoints_for_ghost_1[45] = new Specialpoint_for_ghost(18,20,0,0,1,1);
    tab_specialpoints_for_ghost_1[46] = new Specialpoint_for_ghost(21,20,1,1,1,0);
    tab_specialpoints_for_ghost_1[47] = new Specialpoint_for_ghost(24,20,1,0,1,1);
    tab_specialpoints_for_ghost_1[48] = new Specialpoint_for_ghost(1,23,0,1,1,0);
    tab_specialpoints_for_ghost_1[49] = new Specialpoint_for_ghost(3,23,1,0,0,1);
    tab_specialpoints_for_ghost_1[50] = new Specialpoint_for_ghost(6,23,1,1,1,0);
    tab_specialpoints_for_ghost_1[51] = new Specialpoint_for_ghost(9,23,1,1,0,1);
    tab_specialpoints_for_ghost_1[52] = new Specialpoint_for_ghost(12,23,0,1,1,1);
    tab_specialpoints_for_ghost_1[53] = new Specialpoint_for_ghost(15,23,0,1,1,1);
    tab_specialpoints_for_ghost_1[54] = new Specialpoint_for_ghost(18,23,1,1,0,1);
    tab_specialpoints_for_ghost_1[55] = new Specialpoint_for_ghost(21,23,1,0,1,1);
    tab_specialpoints_for_ghost_1[56] = new Specialpoint_for_ghost(24,23,1,1,0,0);
    tab_specialpoints_for_ghost_1[57] = new Specialpoint_for_ghost(26,23,0,0,1,1);
    tab_specialpoints_for_ghost_1[58] = new Specialpoint_for_ghost(1,26,1,1,1,0);
    tab_specialpoints_for_ghost_1[59] = new Specialpoint_for_ghost(6,26,1,0,1,1);
    tab_specialpoints_for_ghost_1[60] = new Specialpoint_for_ghost(9,26,0,1,1,0);
    tab_specialpoints_for_ghost_1[61] = new Specialpoint_for_ghost(12,26,1,0,0,1);
    tab_specialpoints_for_ghost_1[62] = new Specialpoint_for_ghost(15,26,1,1,0,0);
    tab_specialpoints_for_ghost_1[63] = new Specialpoint_for_ghost(18,26,0,0,1,1);
    tab_specialpoints_for_ghost_1[64] = new Specialpoint_for_ghost(21,26,1,1,1,0);
    tab_specialpoints_for_ghost_1[65] = new Specialpoint_for_ghost(26,26,1,0,1,1);
    tab_specialpoints_for_ghost_1[66] = new Specialpoint_for_ghost(1,29,1,1,0,0);
    tab_specialpoints_for_ghost_1[67] = new Specialpoint_for_ghost(6,29,1,1,0,1);
    tab_specialpoints_for_ghost_1[68] = new Specialpoint_for_ghost(9,29,1,1,0,1);
    tab_specialpoints_for_ghost_1[69] = new Specialpoint_for_ghost(18,29,1,1,0,1);
    tab_specialpoints_for_ghost_1[70] = new Specialpoint_for_ghost(21,29,1,1,0,1);
    tab_specialpoints_for_ghost_1[71] = new Specialpoint_for_ghost(26,29,1,0,0,1);
    
}



function wallCreator()
{
   wall[0] = new Wall (0,0,28,1,0,0,0,0);
wall[1] = new Wall (0,1,1,4,0,0,0,0);
wall[2] = new Wall (13,1,2,4,0,0,20,20);
wall[3] = new Wall (27,1,1,4,0,0,0,0);
wall[4] = new Wall (2,2,4,2,20,20,0,20);
wall[5] = new Wall (7,2,5,2,20,20,0,20);
wall[6] = new Wall (16,2,5,2,20,20,20,0);
wall[7] = new Wall (22,2,4,2,20,20,20,0);
wall[8] = new Wall (4,4,2,4,0,0,20,20);
wall[9] = new Wall (10,4,2,4,0,0,20,20);
wall[10] = new Wall (16,4,2,4,0,0,20,20);
wall[11] = new Wall (22,4,2,4,0,0,20,20);
wall[12] = new Wall (0,5,3,1,0,20,0,20);
wall[13] = new Wall (7,5,2,6,20,20,20,0);
wall[14] = new Wall (19,5,2,6,20,20,0,20);
wall[15] = new Wall (25,5,3,1,20,0,20,0);
wall[16] = new Wall (2,6,1,8,0,0,20,0);
wall[17] = new Wall (13,6,2,3,20,20,0,0);
wall[18] = new Wall (25,6,1,8,0,0,0,20);
wall[19] = new Wall (4,9,3,2,20,0,0,20);
wall[20] = new Wall (10,9,8,2,20,20,20,20);
wall[21] = new Wall (21,9,3,2,0,20,20,0);
wall[22] = new Wall (4,12,2,8,20,20,20,20);
wall[23] = new Wall (7,12,2,11,20,20,20,20);
wall[24] = new Wall (10,12,3,1,20,20,20,0);
wall[25] = new Wall (15,12,3,1,20,20,0,20);
wall[26] = new Wall (19,12,2,11,20,20,20,20);
wall[27] = new Wall (22,12,2,8,20,20,20,20);
wall[28] = new Wall (0,13,2,1,20,0,0,20);
wall[29] = new Wall (10,13,1,4,0,0,0,20);
wall[30] = new Wall (17,13,1,3,0,0,0,0);
wall[31] = new Wall (26,13,2,1,0,20,20,0);
wall[32] = new Wall (0,15,4,2,20,0,0,20);
wall[33] = new Wall (24,15,4,2,0,20,20,0);
wall[34] = new Wall (11,16,7,1,0,0,20,0);
wall[35] = new Wall (0,18,3,1,20,20,0,20);
wall[36] = new Wall (9,18,3,2,0,20,20,0);
wall[37] = new Wall (13,18,2,3,20,20,0,0);
wall[38] = new Wall (16,18,3,2,20,0,0,20);
wall[39] = new Wall (25,18,3,1,20,20,20,0);
wall[40] = new Wall (2,19,1,4,0,0,20,0);
wall[41] = new Wall (25,19,1,4,0,0,0,20);
wall[42] = new Wall (4,21,2,5,20,20,20,0);
wall[43] = new Wall (10,21,8,2,20,20,20,20);
wall[44] = new Wall (22,21,2,5,20,20,0,20);
wall[45] = new Wall (0,22,2,1,20,0,0,0);
wall[46] = new Wall (26,22,2,1,0,20,0,0);
wall[47] = new Wall (0,23,1,7,0,0,0,0);
wall[48] = new Wall (27,23,1,7,0,0,0,0);
wall[49] = new Wall (2,24,2,2,20,0,0,20);
wall[50] = new Wall (7,24,2,5,20,0,20,20);
wall[51] = new Wall (9,24,3,2,0,20,20,0);
wall[52] = new Wall (13,24,2,3,20,20,0,0);
wall[53] = new Wall (16,24,3,2,20,0,0,20);
wall[54] = new Wall (19,24,2,5,0,20,20,20);
wall[55] = new Wall (24,24,2,2,0,20,20,0);
wall[56] = new Wall (2,27,4,2,20,20,20,20);
wall[57] = new Wall (10,27,8,2,20,20,20,20);
wall[58] = new Wall (22,27,4,2,20,20,20,20);
wall[59] = new Wall (0,30,28,1,0,0,0,0);
    
}


function foodCreator()
{
    food[0] = new Food(1,1);
    food[1] = new Food(2,1);
    food[2] = new Food(3,1);
    food[3] = new Food(4,1);
    food[4] = new Food(5,1);
    food[5] = new Food(6,1);
    food[6] = new Food(7,1);
    food[7] = new Food(8,1);
    food[8] = new Food(9,1);
    food[9] = new Food(10,1);
    food[10] = new Food(11,1);
    food[11] = new Food(12,1);
    food[12] = new Food(15,1);
    food[13] = new Food(16,1);
    food[14] = new Food(17,1);
    food[15] = new Food(18,1);
    food[16] = new Food(19,1);
    food[17] = new Food(20,1);
    food[18] = new Food(21,1);
    food[19] = new Food(22,1);
    food[20] = new Food(23,1);
    food[21] = new Food(24,1);
    food[22] = new Food(25,1);
    food[23] = new Food(26,1);
    food[24] = new Food(1,2);
    food[25] = new Food(6,2);
    food[26] = new Food(12,2);
    food[27] = new Food(15,2);
    food[28] = new Food(21,2);
    food[29] = new Food(26,2);
    food[30] = new Food(1,3);
    food[31] = new Food(6,3);
    food[32] = new Food(12,3);
    food[33] = new Food(15,3);
    food[34] = new Food(21,3);
    food[35] = new Food(26,3);
    food[36] = new Food(1,4);
    food[37] = new Food(2,4);
    food[38] = new Food(3,4);
    food[39] = new Food(6,4);
    food[40] = new Food(7,4);
    food[41] = new Food(8,4);
    food[42] = new Food(9,4);
    food[43] = new Food(12,4);
    food[44] = new Food(15,4);
    food[45] = new Food(18,4);
    food[46] = new Food(19,4);
    food[47] = new Food(20,4);
    food[48] = new Food(21,4);
    food[49] = new Food(24,4);
    food[50] = new Food(25,4);
    food[51] = new Food(26,4);
    food[52] = new Food(3,5);
    food[53] = new Food(6,5);
    food[54] = new Food(9,5);
    food[55] = new Food(12,5);
    food[56] = new Food(13,5);
    food[57] = new Food(14,5);
    food[58] = new Food(15,5);
    food[59] = new Food(18,5);
    food[60] = new Food(21,5);
    food[61] = new Food(24,5);
    food[62] = new Food(3,6);
    food[63] = new Food(6,6);
    food[64] = new Food(9,6);
    food[65] = new Food(12,6);
    food[66] = new Food(15,6);
    food[67] = new Food(18,6);
    food[68] = new Food(21,6);
    food[69] = new Food(24,6);
    food[70] = new Food(3,7);
    food[71] = new Food(6,7);
    food[72] = new Food(9,7);
    food[73] = new Food(12,7);
    food[74] = new Food(15,7);
    food[75] = new Food(18,7);
    food[76] = new Food(21,7);
    food[77] = new Food(24,7);
    food[78] = new Food(3,8);
    food[79] = new Food(4,8);
    food[80] = new Food(5,8);
    food[81] = new Food(6,8);
    food[82] = new Food(9,8);
    food[83] = new Food(10,8);
    food[84] = new Food(11,8);
    food[85] = new Food(12,8);
    food[86] = new Food(15,8);
    food[87] = new Food(16,8);
    food[88] = new Food(17,8);
    food[89] = new Food(18,8);
    food[90] = new Food(21,8);
    food[91] = new Food(22,8);
    food[92] = new Food(23,8);
    food[93] = new Food(24,8);
    food[94] = new Food(3,9);
    food[95] = new Food(24,9);
    food[96] = new Food(3,10);
    food[97] = new Food(24,10);
    food[98] = new Food(3,11);
    food[99] = new Food(4,11);
    food[100] = new Food(5,11);
    food[101] = new Food(6,11);
    food[102] = new Food(21,11);
    food[103] = new Food(22,11);
    food[104] = new Food(23,11);
    food[105] = new Food(24,11);
    food[106] = new Food(6,12);
    food[107] = new Food(21,12);
    food[108] = new Food(6,13);
    food[109] = new Food(21,13);
    food[110] = new Food(6,14);
    food[111] = new Food(21,14);
    food[112] = new Food(6,15);
    food[113] = new Food(21,15);
    food[114] = new Food(6,16);
    food[115] = new Food(21,16);
    food[116] = new Food(6,17);
    food[117] = new Food(21,17);
    food[118] = new Food(6,18);
    food[119] = new Food(21,18);
    food[120] = new Food(6,19);
    food[121] = new Food(21,19);
    food[122] = new Food(3,20);
    food[123] = new Food(4,20);
    food[124] = new Food(5,20);
    food[125] = new Food(6,20);
    food[126] = new Food(9,20);
    food[127] = new Food(10,20);
    food[128] = new Food(11,20);
    food[129] = new Food(12,20);
    food[130] = new Food(15,20);
    food[131] = new Food(16,20);
    food[132] = new Food(17,20);
    food[133] = new Food(18,20);
    food[134] = new Food(21,20);
    food[135] = new Food(22,20);
    food[136] = new Food(23,20);
    food[137] = new Food(24,20);
    food[138] = new Food(3,21);
    food[139] = new Food(6,21);
    food[140] = new Food(9,21);
    food[141] = new Food(18,21);
    food[142] = new Food(21,21);
    food[143] = new Food(24,21);
    food[144] = new Food(3,22);
    food[145] = new Food(6,22);
    food[146] = new Food(9,22);
    food[147] = new Food(18,22);
    food[148] = new Food(21,22);
    food[149] = new Food(24,22);
    food[150] = new Food(1,23);
    food[151] = new Food(2,23);
    food[152] = new Food(3,23);
    food[153] = new Food(6,23);
    food[154] = new Food(7,23);
    food[155] = new Food(8,23);
    food[156] = new Food(9,23);
    food[157] = new Food(10,23);
    food[158] = new Food(11,23);
    food[159] = new Food(12,23);
    food[160] = new Food(13,23);
    food[161] = new Food(14,23);
    food[162] = new Food(15,23);
    food[163] = new Food(16,23);
    food[164] = new Food(17,23);
    food[165] = new Food(18,23);
    food[166] = new Food(19,23);
    food[167] = new Food(20,23);
    food[168] = new Food(21,23);
    food[169] = new Food(24,23);
    food[170] = new Food(25,23);
    food[171] = new Food(26,23);
    food[172] = new Food(1,24);
    food[173] = new Food(6,24);
    food[174] = new Food(12,24);
    food[175] = new Food(15,24);
    food[176] = new Food(21,24);
    food[177] = new Food(26,24);
    food[178] = new Food(1,25);
    food[179] = new Food(6,25);
    food[180] = new Food(12,25);
    food[181] = new Food(15,25);
    food[182] = new Food(21,25);
    food[183] = new Food(26,25);
    food[184] = new Food(1,26);
    food[185] = new Food(2,26);
    food[186] = new Food(3,26);
    food[187] = new Food(4,26);
    food[188] = new Food(5,26);
    food[189] = new Food(6,26);
    food[190] = new Food(9,26);
    food[191] = new Food(10,26);
    food[192] = new Food(11,26);
    food[193] = new Food(12,26);
    food[194] = new Food(15,26);
    food[195] = new Food(16,26);
    food[196] = new Food(17,26);
    food[197] = new Food(18,26);
    food[198] = new Food(21,26);
    food[199] = new Food(22,26);
    food[200] = new Food(23,26);
    food[201] = new Food(24,26);
    food[202] = new Food(25,26);
    food[203] = new Food(26,26);
    food[204] = new Food(1,27);
    food[205] = new Food(6,27);
    food[206] = new Food(9,27);
    food[207] = new Food(18,27);
    food[208] = new Food(21,27);
    food[209] = new Food(26,27);
    food[210] = new Food(1,28);
    food[211] = new Food(6,28);
    food[212] = new Food(9,28);
    food[213] = new Food(18,28);
    food[214] = new Food(21,28);
    food[215] = new Food(26,28);
    food[216] = new Food(1,29);
    food[217] = new Food(2,29);
    food[218] = new Food(3,29);
    food[219] = new Food(4,29);
    food[220] = new Food(5,29);
    food[221] = new Food(6,29);
    food[222] = new Food(7,29);
    food[223] = new Food(8,29);
    food[224] = new Food(9,29);
    food[225] = new Food(10,29);
    food[226] = new Food(11,29);
    food[227] = new Food(12,29);
    food[228] = new Food(13,29);
    food[229] = new Food(14,29);
    food[230] = new Food(15,29);
    food[231] = new Food(16,29);
    food[232] = new Food(17,29);
    food[233] = new Food(18,29);
    food[234] = new Food(19,29);
    food[235] = new Food(20,29);
    food[236] = new Food(21,29);
    food[237] = new Food(22,29);
    food[238] = new Food(23,29);
    food[239] = new Food(24,29);
    food[240] = new Food(25,29);
    food[241] = new Food(26,29);
    
}

function specialPointCreator()
{
    tab_specialpoints[0] = new Specialpoint(1,1);
    tab_specialpoints[1] = new Specialpoint(6,1);
    tab_specialpoints[2] = new Specialpoint(12,1);
    tab_specialpoints[3] = new Specialpoint(15,1);
    tab_specialpoints[4] = new Specialpoint(21,1);
    tab_specialpoints[5] = new Specialpoint(26,1);
    tab_specialpoints[6] = new Specialpoint(1,4);
    tab_specialpoints[7] = new Specialpoint(3,4);
    tab_specialpoints[8] = new Specialpoint(6,4);
    tab_specialpoints[9] = new Specialpoint(9,4);
    tab_specialpoints[10] = new Specialpoint(18,4);
    tab_specialpoints[11] = new Specialpoint(21,4);
    tab_specialpoints[12] = new Specialpoint(24,4);
    tab_specialpoints[13] = new Specialpoint(26,4);
    tab_specialpoints[14] = new Specialpoint(12,5);
    tab_specialpoints[15] = new Specialpoint(15,5);
    tab_specialpoints[16] = new Specialpoint(3,8);
    tab_specialpoints[17] = new Specialpoint(6,8);
    tab_specialpoints[18] = new Specialpoint(9,8);
    tab_specialpoints[19] = new Specialpoint(12,8);
    tab_specialpoints[20] = new Specialpoint(15,8);
    tab_specialpoints[21] = new Specialpoint(18,8);
    tab_specialpoints[22] = new Specialpoint(21,8);
    tab_specialpoints[23] = new Specialpoint(24,8);
    tab_specialpoints[24] = new Specialpoint(3,11);
    tab_specialpoints[25] = new Specialpoint(6,11);
    tab_specialpoints[26] = new Specialpoint(9,11);
    tab_specialpoints[27] = new Specialpoint(12,11);
    tab_specialpoints[28] = new Specialpoint(18,11);
    tab_specialpoints[29] = new Specialpoint(21,11);
    tab_specialpoints[30] = new Specialpoint(24,11);
    tab_specialpoints[31] = new Specialpoint(3,14);
    tab_specialpoints[32] = new Specialpoint(24,14);
    tab_specialpoints[33] = new Specialpoint(3,17);
    tab_specialpoints[34] = new Specialpoint(9,17);
    tab_specialpoints[35] = new Specialpoint(12,17);
    tab_specialpoints[36] = new Specialpoint(15,17);
    tab_specialpoints[37] = new Specialpoint(18,17);
    tab_specialpoints[38] = new Specialpoint(24,17);
    tab_specialpoints[39] = new Specialpoint(3,20);
    tab_specialpoints[40] = new Specialpoint(6,20);
    tab_specialpoints[41] = new Specialpoint(9,20);
    tab_specialpoints[42] = new Specialpoint(12,20);
    tab_specialpoints[43] = new Specialpoint(15,20);
    tab_specialpoints[44] = new Specialpoint(18,20);
    tab_specialpoints[45] = new Specialpoint(21,20);
    tab_specialpoints[46] = new Specialpoint(24,20);
    tab_specialpoints[47] = new Specialpoint(1,23);
    tab_specialpoints[48] = new Specialpoint(3,23);
    tab_specialpoints[49] = new Specialpoint(6,23);
    tab_specialpoints[50] = new Specialpoint(9,23);
    tab_specialpoints[51] = new Specialpoint(12,23);
    tab_specialpoints[52] = new Specialpoint(15,23);
    tab_specialpoints[53] = new Specialpoint(18,23);
    tab_specialpoints[54] = new Specialpoint(21,23);
    tab_specialpoints[55] = new Specialpoint(24,23);
    tab_specialpoints[56] = new Specialpoint(26,23);
    tab_specialpoints[57] = new Specialpoint(1,26);
    tab_specialpoints[58] = new Specialpoint(6,26);
    tab_specialpoints[59] = new Specialpoint(9,26);
    tab_specialpoints[60] = new Specialpoint(12,26);
    tab_specialpoints[61] = new Specialpoint(15,26);
    tab_specialpoints[62] = new Specialpoint(18,26);
    tab_specialpoints[63] = new Specialpoint(21,26);
    tab_specialpoints[64] = new Specialpoint(26,26);
    tab_specialpoints[65] = new Specialpoint(1,29);
    tab_specialpoints[66] = new Specialpoint(6,29);
    tab_specialpoints[67] = new Specialpoint(9,29);
    tab_specialpoints[68] = new Specialpoint(18,29);
    tab_specialpoints[69] = new Specialpoint(21,29);
    tab_specialpoints[70] = new Specialpoint(26,29);
    
}

function bigFoodCreator()
{
    bigFood[0] = new BigFood(1,3);   
    bigFood[1] = new BigFood(26,3);   
    bigFood[2] = new BigFood(1,23);   
    bigFood[3] = new BigFood(26,23);   
}