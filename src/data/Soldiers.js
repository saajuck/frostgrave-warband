import { ANIMAL, NO_CARRY, HAND_WEAPON, DAGGER, TWO_HANDED_WEAPON, STAFF, SHIELD, MAIL_ARMOUR, START_WITH_HEALING_POTION, CROSSBOW, LEATHER_ARMOUR, BOW } from "./CharacterFeatures";

export const WAR_HOUND = 'War Hound';
export const THUG = 'Thug';
export const THIEF = 'Thief';
export const ARCHER = 'Archer';
export const CROSSBOWMAN = 'Crossbowman';
export const INFANTRYMAN = 'Infantryman';
export const TRACKER = 'Tracker';
export const MAN_AT_ARMS = 'Man-at-arms';
export const TREASURE_HUNTER = 'Treasure Hunter';
export const KNIGHT = 'Knight';
export const TEMPLAR = 'Templar';
export const RANGER = 'Ranger';
export const BARBARIAN = 'Barbarian';
export const APOTHECARY = 'Apothecary';
export const MARKSMAN = 'Marksman';

export const soldierTypes = [WAR_HOUND, THUG, THIEF, ARCHER, CROSSBOWMAN, INFANTRYMAN, TRACKER, MAN_AT_ARMS, TREASURE_HUNTER, KNIGHT, TEMPLAR, RANGER, BARBARIAN, APOTHECARY, MARKSMAN];

export default {
  [WAR_HOUND]: {
    name: 'War Hound',
    move: 8,
    fight: 1,
    shoot: 0,
    armour: 10,
    will: 2,
    health: 8,
    cost: 10,
    features: [ANIMAL, NO_CARRY],
    soldierType: WAR_HOUND,
    itemLimit: 0,
    isSpecialist: false,
  },
  [THUG]: {
    name: 'Thug',
    move: 6,
    fight: 2,
    shoot: 0,
    armour: 10,
    will: -1,
    health: 10,
    cost: 0,
    features: [HAND_WEAPON],
    soldierType: THUG,
    itemLimit: 1,
    isSpecialist: false,
  },
  [THIEF]: {
    name: 'Thief',
    move: 7,
    fight: 1,
    shoot: 0,
    armour: 10,
    will: 0,
    health: 10,
    cost: 0,
    features: [DAGGER],
    soldierType: THIEF,
    isSpecialist: false,
  },
  [ARCHER]: {
    name: 'Archer',
    move: 6,
    fight: 2,
    shoot: 2,
    armour: 11,
    will: 0,
    health: 10,
    cost: 50,
    features: [BOW, DAGGER, LEATHER_ARMOUR],
    soldierType: ARCHER,
    isSpecialist: true,
  },
  [CROSSBOWMAN]: {
    name: 'Crossbowman',
    move: 6,
    fight: 2,
    shoot: 2,
    armour: 11,
    will: 0,
    health: 10,
    cost: 50,
    features: [CROSSBOW, DAGGER, LEATHER_ARMOUR],
    soldierType: CROSSBOWMAN,
    isSpecialist: true,
  },
  [INFANTRYMAN]: {
    name: 'Infantryman',
    move: 6,
    fight: 3,
    shoot: 0,
    armour: 11,
    will: 0,
    health: 10,
    cost: 50,
    features: [TWO_HANDED_WEAPON, LEATHER_ARMOUR],
    soldierType: INFANTRYMAN,
    isSpecialist: false,
  },
  [TRACKER]: {
    name: 'Tracker',
    move: 7,
    fight: 2,
    shoot: 2,
    armour: 11,
    will: 1,
    health: 12,
    cost: 80,
    features: [STAFF, BOW, LEATHER_ARMOUR],
    soldierType: TRACKER,
    isSpecialist: true,
  },
  [MAN_AT_ARMS]: {
    name: 'Man-at-Arms',
    move: 6,
    fight: 3,
    shoot: 0,
    armour: 12,
    will: 1,
    health: 12,
    cost: 80,
    features: [HAND_WEAPON, SHIELD, LEATHER_ARMOUR],
    soldierType: MAN_AT_ARMS,
    isSpecialist: false,
  },
  [TREASURE_HUNTER]: {
    name: 'Treasure Hunter',
    move: 7,
    fight: 4,
    shoot: 0,
    armour: 11,
    will: 2,
    health: 12,
    cost: 80,
    features: [HAND_WEAPON, DAGGER, LEATHER_ARMOUR],
    soldierType: TREASURE_HUNTER,
    isSpecialist: true,
  },
  [KNIGHT]: {
    name: 'Knight',
    move: 5,
    fight: 4,
    shoot: 0,
    armour: 13,
    will: 1,
    health: 12,
    cost: 100,
    features: [HAND_WEAPON, SHIELD, MAIL_ARMOUR],
    soldierType: KNIGHT,
    isSpecialist: true,
  },
  [TEMPLAR]: {
    name: 'Templar',
    move: 5,
    fight: 4,
    shoot: 0,
    armour: 12,
    will: 1,
    health: 12,
    cost: 100,
    features: [TWO_HANDED_WEAPON, MAIL_ARMOUR],
    soldierType: TEMPLAR,
    isSpecialist: true,
  },
  [RANGER]: {
    name: 'Ranger',
    move: 7,
    fight: 2,
    shoot: 2,
    armour: 11,
    will: 2,
    health: 12,
    cost: 100,
    features: [BOW, HAND_WEAPON, LEATHER_ARMOUR],
    soldierType: RANGER,
    isSpecialist: true,
  },
  [BARBARIAN]: {
    name: 'Barbarian',
    move: 6,
    fight: 4,
    shoot: 0,
    armour: 10,
    will: 3,
    health: 14,
    cost: 100,
    features: [TWO_HANDED_WEAPON],
    soldierType: BARBARIAN,
    isSpecialist: true,
    soldierType: BARBARIAN,
  },
  [APOTHECARY]: {
    name: 'Apothecary',
    move: 6,
    fight: 0,
    shoot: 0,
    armour: 10,
    will: 0,
    health: 12,
    cost: 100,
    features: [STAFF, START_WITH_HEALING_POTION],
    soldierType: APOTHECARY,
    isSpecialist: false,
  },
  [MARKSMAN]: {
    name: 'Marksman',
    move: 5,
    fight: 2,
    shoot: 3,
    armour: 12,
    will: 1,
    health: 12,
    cost: 100,
    features: [CROSSBOW, HAND_WEAPON, MAIL_ARMOUR],
    soldierType: MARKSMAN,
    isSpecialist: true,
  },
};